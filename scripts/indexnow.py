from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
HOST = "moruika.github.io"
BASE = f"https://{HOST}"
KEY_FILE = ROOT / "12af1af38f41426ea4c30516b6b6a896.txt"

frontmatter_re = re.compile(r"^---\s*\n(.*?)\n---\s*(?:\n|$)", re.S)
permalink_re = re.compile(r"^permalink:\s*[\"']?([^\"'\n]+)[\"']?\s*$", re.M)

CONTENT_EXTENSIONS = {".md", ".html"}
GLOBAL_PATH_PREFIXES = ("_layouts/", "_includes/", "_data/")
GLOBAL_PATHS = {
    "_config.yml",
    "robots.txt",
    "sitemap.xml",
    "image-sitemap.xml",
    "llms.txt",
}


def git(*args: str) -> str:
    return subprocess.check_output(["git", *args], cwd=ROOT, text=True, stderr=subprocess.STDOUT).strip()


def read_text_at(ref: str, relpath: str) -> str | None:
    path = ROOT / relpath
    if ref == "WORKTREE":
        try:
            return path.read_text(encoding="utf-8")
        except FileNotFoundError:
            return None
    try:
        return git("show", f"{ref}:{relpath}")
    except subprocess.CalledProcessError:
        return None


def route_from_content(content: str | None) -> str | None:
    if not content:
        return None
    match = frontmatter_re.match(content)
    if not match:
        return None
    fm = match.group(1)
    permalink = permalink_re.search(fm)
    if not permalink:
        return None
    route = permalink.group(1).strip()
    if not route or route == "/404.html" or route.endswith((".xml", ".txt")):
        return None
    return route


def is_page_file(path: str) -> bool:
    return Path(path).suffix.lower() in CONTENT_EXTENSIONS


def collect_all_routes() -> set[str]:
    routes: set[str] = set()
    candidates = [
        *ROOT.glob("*.md"),
        *ROOT.glob("*.html"),
        *ROOT.glob("ru/*.md"),
        *ROOT.glob("ru/*.html"),
        *ROOT.glob("_posts/*.md"),
        *ROOT.glob("projects/*.md"),
        *ROOT.glob("ru/projects/*.md"),
    ]
    for path in candidates:
        route = route_from_content(read_text_at("WORKTREE", str(path.relative_to(ROOT))))
        if route:
            routes.add(route)
    return routes


def collect_changed_routes(before: str | None, after: str | None) -> set[str]:
    if not before or not after or before == "0" * 40:
        return collect_all_routes()

    try:
        diff = git("diff", "--name-status", before, after)
    except subprocess.CalledProcessError:
        return collect_all_routes()

    routes: set[str] = set()
    global_change = False

    for line in diff.splitlines():
        if not line.strip():
            continue
        parts = line.split("\t")
        status = parts[0]
        paths = parts[1:]

        # Renames/copies contain old and new paths; notify both URLs.
        if status.startswith(("R", "C")):
            for relpath in paths:
                if is_page_file(relpath):
                    old_route = route_from_content(read_text_at(before, relpath))
                    new_route = route_from_content(read_text_at(after, relpath))
                    if old_route:
                        routes.add(old_route)
                    if new_route:
                        routes.add(new_route)
            continue

        relpath = paths[0]
        if relpath in GLOBAL_PATHS or relpath.startswith(GLOBAL_PATH_PREFIXES):
            global_change = True
            continue

        if is_page_file(relpath):
            current_route = route_from_content(read_text_at(after, relpath))
            previous_route = route_from_content(read_text_at(before, relpath))
            if current_route:
                routes.add(current_route)
            if previous_route:
                routes.add(previous_route)

    if global_change:
        routes.update(collect_all_routes())

    return routes


def main() -> int:
    parser = argparse.ArgumentParser(description="Notify IndexNow about changed site URLs.")
    parser.add_argument("--before", default=None, help="Previous commit SHA (GitHub event.before).")
    parser.add_argument("--after", default=None, help="Current commit SHA (GitHub event SHA).")
    parser.add_argument("--dry-run", action="store_true", help="Print payload without sending it.")
    args = parser.parse_args()

    if not KEY_FILE.exists():
        raise SystemExit(f"IndexNow key file not found: {KEY_FILE.name}")

    before = args.before
    after = args.after
    routes = collect_changed_routes(before, after)
    urls = sorted(BASE + route for route in routes)

    if not urls:
        print("No changed page URLs found; nothing to submit.")
        return 0

    payload = {
        "host": HOST,
        "key": KEY_FILE.read_text(encoding="utf-8").strip(),
        "keyLocation": f"{BASE}/{KEY_FILE.name}",
        "urlList": urls,
    }

    print(json.dumps(payload, ensure_ascii=False, indent=2))
    if args.dry_run:
        return 0

    request = Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    with urlopen(request, timeout=30) as response:
        print(f"IndexNow response: HTTP {response.status}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
