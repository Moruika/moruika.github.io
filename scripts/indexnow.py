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

frontmatter_re = re.compile(r"^---\s*\n(.*?)\n---\s*(?:\n|$)", re.S)
permalink_re = re.compile(r"^permalink:\s*[\"']?([^\"'\n]+)[\"']?\s*$", re.M)
robots_re = re.compile(r"^robots:\s*[\"']?([^\"'\n]+)[\"']?\s*$", re.M)
sitemap_re = re.compile(r"^sitemap:\s*false\s*$", re.M)

URLS: set[str] = set()

# Any front-matter page can be indexed. This keeps new /cult/, /archive/, /links/
# pages in IndexNow automatically and avoids stale hardcoded routes.
for path in sorted(list(ROOT.glob("*.md")) + list(ROOT.glob("*.html")) + list((ROOT / "ru").glob("*.md")) + list((ROOT / "ru").glob("*.html")) + list((ROOT / "_posts").glob("*.md"))):
    if not path.exists():
        continue
    content = path.read_text(encoding="utf-8")
    match = frontmatter_re.match(content)
    if not match:
        continue
    frontmatter = match.group(1)
    if sitemap_re.search(frontmatter):
        continue
    robots = robots_re.search(frontmatter)
    if robots and robots.group(1).strip().lower().startswith("noindex"):
        continue
    permalink = permalink_re.search(frontmatter)
    if not permalink:
        continue
    route = permalink.group(1).strip()
    if route == "/sitemap.xml":
        continue
    URLS.add(BASE + route)

payload = {
    "host": HOST,
    "key": KEY_FILE.read_text(encoding="utf-8").strip(),
    "keyLocation": f"{BASE}/{KEY_FILE.name}",
    "urlList": sorted(URLS),
}

if not URLS:
    sys.exit("No URLs found")

request = Request(
    "https://api.indexnow.org/indexnow",
    data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
    headers={"Content-Type": "application/json; charset=utf-8"},
    method="POST",
)

print(json.dumps(payload, ensure_ascii=False, indent=2))
with urlopen(request, timeout=30) as response:
    print(f"IndexNow response: HTTP {response.status}")
