# CLAUDE.md

This file guides Claude Code when working in this repository.

## Overview

Personal portfolio and CV website for Grégoire Tinnes, built on the **MyPortfolio** Bootstrap template (BootstrapMade). It is a static multi-page HTML site with no build step, no bundler, and no package.json — pages are plain HTML files served as-is.

The site is deployed via GitHub Pages (see `CNAME` → `gregoiretinn.es`).

## Structure

- `index.html` — portfolio grid (filterable by category: web, graphisme, audiovisuel, 3D, photographie)
- `about.html`, `contact.html` — main pages
- One HTML file per portfolio project at the root (e.g. `obaine.html`, `myzik.html`, `villa-savoye.html`, ...) — each is a standalone project page, not templated/generated
- `assets/css/style.css` — custom site styles
- `assets/js/`
  - `components.js` — injects the shared header/footer markup into every page via JS (so header/footer changes are made here, not per-page)
  - `lang.js`, `jquery.localize.min.js` — client-side i18n switcher (FR/EN)
  - `main.js` — template behavior (filters, animations, etc.)
- `assets/lang/lang-fr.json`, `assets/lang/lang-en.json` — translation strings, keyed and referenced via `data-localize="section.key"` attributes in HTML
- `assets/vendor/` — third-party libraries (Bootstrap, AOS, Swiper, isotope, php-email-form, bootstrap-icons) — vendored, do not hand-edit
- `assets/img/` — images (a `source` subfolder for originals is gitignored)

## Working conventions

- No build/test/lint tooling exists in this repo — there is nothing to run before committing beyond visually checking the affected HTML page(s) in a browser.
- Site language strings live in `assets/lang/lang-*.json`. When adding user-facing text, add a key there and reference it with `data-localize="..."` rather than hardcoding both languages inline.
- Header and footer are injected by `assets/js/components.js`, not hand-copied into each HTML file — edit them there once.
- Each project page at the root follows the same layout as existing ones (e.g. `obaine.html`); copy an existing project page as a starting point for a new one rather than writing one from scratch.
- Keep vendor libraries under `assets/vendor/` untouched; if a template/library needs upgrading, replace the whole vendor folder rather than patching individual files.
