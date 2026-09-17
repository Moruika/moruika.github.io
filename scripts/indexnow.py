from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
HOST = "moruika.github.io"
BASE = f"https://{HOST}"
KEY_FILE = ROOT / "12af1af38f41426ea4c30516b6b6a896.txt"

URLS: set[str] = set()

STATIC_URLS = {
    "index.md": "/",
    "team.md": "/team/",
    "projects.md": "/projects/",
    "blog.html": "/blog/",
    "ru/index.md": "/ru/",
    "ru/team.md": "/ru/team/",
    "ru/projects.md": "/ru/projects/",
    "ru/blog.html": "/ru/blog/",
}

for file_name, url in STATIC_URLS.items():
    if (ROOT / file_name).exists():
        URLS.add(BASE + url)

frontmatter_re = re.compile(r"^---\s*\n(.*?)\n---\s*$", re.S)
permalink_re = re.compile(r"^permalink:\s*[\"']?([^\"'\n]+)[\"']?\s*$", re.M)
lang_re = re.compile(r"^lang:\s*[\"']?([^\"'\n]+)[\"']?\s*$", re.M)

for post in sorted((ROOT / "_posts").glob("*.md")):
    content = post.read_text(encoding="utf-8")
    match = frontmatter_re.match(content)
    if not match:
        continue
    frontmatter = match.group(1)
    permalink = permalink_re.search(frontmatter)
    if permalink:
        URLS.add(BASE + permalink.group(1).strip())
        continue
    name = post.stem
    date_part, slug = name[:10], name[11:]
    year, month, day = date_part.split("-")
    lang = lang_re.search(frontmatter)
    lang_value = lang.group(1).strip() if lang else "en"
    prefix = "/ru" if lang_value == "ru" else ""
    URLS.add(BASE + f"{prefix}/blog/{year}/{month}/{day}/{slug}/")

payload = {
    "host": HOST,
    "key": KEY_FILE.read_text(encoding="utf-8").strip(),
    "keyLocation": f"{BASE}/{KEY_FILE.name}",
    "urlList": sorted(URLS),
}

request = Request(
    "https://api.indexnow.org/indexnow",
    data=json.dumps(payload).encode("utf-8"),
    headers={"Content-Type": "application/json; charset=utf-8"},
    method="POST",
)

print(json.dumps(payload, ensure_ascii=False, indent=2))
with urlopen(request, timeout=30) as response:
    print(f"IndexNow response: HTTP {response.status}")

if not URLS:
    sys.exit("No URLs found")
