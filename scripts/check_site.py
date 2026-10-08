"""Static consistency checks for the Jekyll sources (no Ruby needed).

Run:  python scripts/check_site.py        (needs: pip install pyyaml)
Exit code 1 if anything is broken, so it can gate CI.
Checks: front matter, EN<->RU lang_alt_url pairs, files referenced from /assets/,
internal links to existing permalinks, EN/RU key parity in _data/ui.yml.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
FM = re.compile(r"^\s*---\n(.*?)\n---", re.S)
SKIP_TOP = {"assets", "scripts", "_site", ".github", "node_modules", "vendor"}
NON_PAGES = {"/feed.xml", "/ru/feed.xml", "/llms.txt", "/sitemap.xml", "/image-sitemap.xml", "/robots.txt"}

errors: list[str] = []
warnings: list[str] = []

pages: dict[str, dict] = {}
for path in ROOT.rglob("*"):
    rel = path.relative_to(ROOT)
    if not path.is_file() or rel.parts[0] in SKIP_TOP or path.suffix not in {".md", ".html"}:
        continue
    if rel.parts[0] in {"_layouts", "_includes"}:
        continue
    m = FM.match(path.read_text(encoding="utf-8"))
    if not m:
        continue
    try:
        pages[str(rel)] = yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError as exc:
        errors.append(f"{rel}: broken front matter ({exc})")

permalinks = {fm["permalink"]: name for name, fm in pages.items() if fm.get("permalink")}

for name, fm in pages.items():
    if name.endswith(".xml"):
        continue
    for key in ("title", "description", "lang"):
        if not fm.get(key):
            errors.append(f"{name}: missing '{key}'")
    if len(str(fm.get("description", ""))) > 160:
        warnings.append(f"{name}: description is {len(fm['description'])} chars (layout cuts it at 160)")
    alt = fm.get("lang_alt_url")
    if alt:
        if alt not in permalinks:
            errors.append(f"{name}: lang_alt_url {alt} points to no page")
        elif pages[permalinks[alt]].get("lang_alt_url") != fm.get("permalink"):
            errors.append(f"{name}: {alt} does not link back (hreflang pair is not reciprocal)")

sources = [p for p in ROOT.rglob("*") if p.is_file() and p.suffix in {".md", ".html", ".yml", ".css", ".xml", ".txt", ".webmanifest"}
           and p.relative_to(ROOT).parts[0] not in {"_site", "node_modules", "vendor", ".github"} and p.name != "README.md"]
for path in sources:
    text = path.read_text(encoding="utf-8", errors="ignore")
    for ref in set(re.findall(r"/assets/[A-Za-z0-9_\-./]+\.(?:webp|png|jpe?g|svg|ico|css|js)", text)):
        if not (ROOT / ref.lstrip("/")).exists():
            errors.append(f"{path.relative_to(ROOT)}: missing file {ref}")
    if path.suffix in {".md", ".html"} and str(path.relative_to(ROOT)) in pages:
        for link in set(re.findall(r"""(?:href=|\]\()["']?(/[A-Za-z0-9_\-./]*)""", text)):
            if link.startswith("/assets") or link in NON_PAGES or link in permalinks:
                continue
            warnings.append(f"{path.relative_to(ROOT)}: link {link} matches no permalink")

ui = yaml.safe_load((ROOT / "_data/ui.yml").read_text(encoding="utf-8"))
for a, b in (("en", "ru"), ("ru", "en")):
    for key in sorted(set(ui[a]) - set(ui[b])):
        errors.append(f"_data/ui.yml: '{key}' exists in {a} but not in {b}")

for w in warnings:
    print("warn :", w)
for e in errors:
    print("ERROR:", e)
print(f"{len(pages)} pages checked, {len(errors)} errors, {len(warnings)} warnings")
sys.exit(1 if errors else 0)
