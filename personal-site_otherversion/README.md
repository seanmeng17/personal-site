# Personal site

Built with Jekyll. Structure:

```
_config.yml         site title, tagline, social links, CV path
_data/navigation.yml the nav bar - add/remove/reorder pages here
_data/research.yml   research entries (list)
_data/awards.yml     awards entries (list)
_data/community.yml  community entries (list)
_writing/            one file per essay/shortform note - each gets its own page
_projects/           one file per project - each gets its own page
index.md             home page (this is also the About content)
writing.md           writing index (pulls from _writing/)
research.md          research page (pulls from _data/research.yml)
projects.html        projects overview - scrollytelling, pulls from _projects/
awards.md            awards page (pulls from _data/awards.yml)
community.md         community page (pulls from _data/community.yml)
assets/css/style.css all styling
assets/js/main.js    nav toggle + writing page tab filter
assets/js/scrolly.js scroll-reveal + active-dot tracking for the projects overview
assets/js/reveal.js  generic scroll-reveal used on individual project/writing pages
assets/cv.pdf        add your CV here - the nav "CV" link points to it
```

## Editing content

Most edits don't touch HTML at all:

- **Home / About** → `index.md`. There's no separate About page - the home
  page is the About page.
- **New award / research item / community role** → add an entry to the
  matching file in `_data/`.
- **New essay or shortform note** → add a new Markdown file to `_writing/`,
  named `YYYY-MM-DD-slug.md`, with `type: essay` or `type: shortform` in the
  front matter. Set `external_url` instead of writing content if it's
  published elsewhere (e.g. Substack). It automatically gets its own page and
  scroll-reveal on its content.
- **New project** → add a new Markdown file to `_projects/`, with `title`,
  `tagline`, and `order` (controls its position in the scroll sequence) in
  the front matter, and the full write-up as the body. It automatically gets
  its own page, appears in the Projects overview scroll sequence, and gets
  scroll-reveal on its content.
- **Nav bar / bio / social links** → `_data/navigation.yml` and `_config.yml`.

You can hand these edits to Claude in chat (paste the new content, or describe
the change) and get the updated file back, or edit the files yourself directly
- everything here is plain Markdown/YAML.

## Run locally

Requires Ruby. Then:

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`.

## Deploy (Vercel)

Vercel auto-detects Jekyll - `vercel.json` in this repo just pins the build
command and output directory, no other config needed.

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project**, import the repo. It should detect
   "Jekyll" automatically.
3. Before your first deploy, run this once locally and commit the result -
   Vercel builds on Linux, and recent Bundler versions need to be told that
   explicitly:
   ```bash
   bundle lock --add-platform x86_64-linux
   ```
4. Deploy. Once live, go to **Settings → Domains** to add a custom domain and
   follow Vercel's DNS instructions with your registrar.

## Deploy (Netlify, alternative)

Also works fine if you'd rather use Netlify: **Add new site → Import an
existing project**, set the build command to `bundle exec jekyll build` and
the publish directory to `_site`, then deploy.
