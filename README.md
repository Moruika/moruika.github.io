# Morui / Moruika site

Jekyll site for GitHub Pages. English is the primary language (root `/`), Russian lives under `/ru/`. Sections: Info, Team, Projects, Blog.

## Language toggle

The **EN/RU** button top-right switches to the matching page in the other language. Each page declares this itself in its front matter:

```
lang: en
lang_alt_url: /ru/
```

To add a new bilingual page: write the English version anywhere, give it `lang: en` and `lang_alt_url: /ru/your-page/`; then create the Russian counterpart under `ru/` with `lang: ru` and `lang_alt_url: /your-page/`.

Nav labels, the language button label, and a couple of other UI strings live in one place: `_data/ui.yml`. Edit wording there without touching any page.

## "Currently" status line

The small dotted line under the tagline ("Currently: …") is pulled from `_config.yml`:

```yaml
current_status: "Prepping the roster for the next scrim"
```

Change that one line any time — no HTML editing needed.

## Adding a blog post

1. In `_posts`, add a file named `YYYY-MM-DD-title.md`.
2. Front matter:
   ```
   ---
   title: "Post title"
   ---
   ```
3. Write the post below it in plain text — it shows up on `/blog/` automatically.
   English posts are picked up on the main `/blog/`; there's no automatic split by language yet — `/ru/blog/` currently just links back to the English list.

## Adding a team member / project

- **Team:** copy one `<li>` line inside `<ul class="roster">` in `team.md` (and its `ru/team.md` counterpart if you want it bilingual).
- **Projects:** copy one `<div class="project">…</div>` block in `projects.md` (and `ru/projects.md`).

## Custom domain later

Add a `CNAME` file with just the domain name in the repo root, and point your registrar's DNS at GitHub Pages. Nothing else needs to change.
