# Sean Meng — Personal Site

A Jekyll-powered personal website deployed from GitHub to Vercel.

The browser receives ordinary HTML, CSS, and JavaScript. Jekyll is used only during deployment to turn reusable layouts, YAML data, and Markdown entries into the final `_site/` folder.

## Structure

```text
sean-personal-site/
├── _config.yml              # Jekyll settings and collections
├── _data/
│   ├── site.yml             # Navigation, contact, social, and CV
│   ├── about.yml            # About text and Thinking About list
│   ├── research.yml         # Research intro and publications
│   └── awards.yml           # Awards
├── _includes/
│   └── sidebar.html         # Shared sidebar used on every page
├── _layouts/
│   ├── default.html         # Shared page shell
│   └── item.html            # Individual writing/project pages
├── _writing/                # One Markdown file per essay or note
├── _projects/               # One Markdown file per project
├── assets/
│   ├── css/style.css
│   ├── js/site.js
│   └── documents/
├── index.html
├── research.html
├── writing.html
├── projects.html
├── awards.html
├── Gemfile
└── vercel.json
```

Do not edit `_site/`. It is generated automatically.

## Add an award

Add a block to the top of `_data/awards.yml`:

```yaml
- date: "Aug 2027"
  title: "Award name"
  issuer: "Issuing organization"
  issued: "August 2027"
  link: "https://example.com"
  description: "Optional description."
```

Use `link: ""` or `description: ""` when either field is unnecessary.

## Add a publication

Edit `_data/research.yml` and add an entry under `in_progress` or `published`.

```yaml
- date: "2027"
  authors: "Author A, Author B."
  title: "Manuscript title."
  status: "In Prep."
```

Published entries may also contain `details` and a `links` list. Copy an existing entry as a template.

## Add writing

Copy an existing Markdown file in `_writing/`, rename it, and edit its front matter:

```yaml
---
title: "Essay title"
year: "2027"
category: "essay"
order: 1
ready: false
active_page: writing
---

Write the essay here in Markdown.
```

Use `category: note` for notes. While `ready: false`, the title appears in the list but is not clickable. Change it to `ready: true` when the piece should open as its own page.

## Add a project

Copy a file in `_projects/`:

```yaml
---
title: "Project title"
year: "2027"
category: "science"
kind: "Science"
order: 1
ready: false
active_page: projects
links:
  - label: "Website"
    url: "https://example.com"
  - label: "Download PDF"
    url: "/assets/documents/example.pdf"
    download: true
---

Write the project description here in Markdown.
```

Use `category: community` and `kind: Community` for community projects.

The optional `links` list appears beneath the project on the Projects page. Add as many links as needed. Set `download: true` only for files that should download rather than open normally.


## Other common edits

- Biography and Thinking About: `_data/about.yml`
- Navigation and contact links: `_data/site.yml`
- Research introduction: `_data/research.yml`
- Global design: `assets/css/style.css`
- Theme persistence and filters: `assets/js/site.js`

## Run locally

Install Ruby and Bundler, then:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Import that repository into Vercel.
3. Vercel will detect Jekyll.
4. The included `vercel.json` builds with `bundle exec jekyll build` and publishes `_site`.

The committed `Gemfile.lock` includes the Linux platform required by Vercel.
