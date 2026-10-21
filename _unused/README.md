# Unused templates

Parked here, not built (Jekyll skips this folder). To bring one back, move it to the
same path at the repo root (`_includes/…`, `_data/…`) and `{% include %}` it on a page.

- `_includes/team-history.html` + `_data/team-history.yml` — year-by-year team history block (entries still "TBD").
- `_includes/related-links.html` — "Explore more" cross-links between sections (uses `related_*` keys in `_data/ui.yml`).
- `_data/gallery.yml`, `_data/clips.yml` — empty data for a gallery / clips section on the archive page
  (`archive_gallery*`, `archive_clips*` keys in `_data/ui.yml`).
