# Padded — Dorm & Bedspace Finder for España Blvd.

A mini-project website built for a web development course (F1–F7), covering HTML/CSS, JavaScript, design/SEO principles, Git version control, and deployment.

**Live demo:** _add your deployed link here after following the steps below_

## What it is

Padded is a fictional listings site for bedspaces, rooms, and studios for rent along España Boulevard, near FEU — a real, well-known student housing strip in Manila. All listings are sample data.

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, quick search, featured listings, how-it-works |
| Listings | `listings.html` | Full listings grid with live search + filters |
| About | `about.html` | Project background |
| Contact | `contact.html` | Inquiry form with validation + FAQ |

## Concepts covered

**HTML & CSS (F1–F2)**
- 4 pages, semantic markup (`header`, `nav`, `main`, `section`, `footer`, `article`)
- Custom design system in `css/style.css` (colors, type scale, layout, components)

**JavaScript (F3–F4)**
- Mobile nav menu toggle (`js/main.js`)
- Dynamic greeting + live clock based on time of day (`js/main.js`)
- Contact form validation with inline error messages (`js/contact.js`)
- Live search/filter on the listings page, driven by JS + URL params (`js/listings.js`)

**Web technologies (F5)**
- Design principles: consistent color/type system, aligned grid layouts, repeated card/chip components, proximity grouping in forms and listing cards
- SEO basics: unique `<title>` and `<meta name="description">` per page, descriptive `alt` text on all images, semantic heading structure

**Version control (F6)** — see steps below

**Deployment (F7)** — see steps below

## How to run it locally

No build step needed. Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Git workflow (F6)

This repo was initialized with:

```bash
git init
git add .
git commit -m "Initial commit: project scaffold with HTML pages and CSS"
```

Then a feature branch was used for the JavaScript work and merged back:

```bash
git checkout -b feature/interactivity
# ... added js/main.js, js/listings.js, js/contact.js ...
git add .
git commit -m "Add nav toggle, dynamic greeting/clock, listings filter, and form validation"
git checkout main
git merge feature/interactivity
```

Run `git log --oneline --graph --all` to see the full history.

## Deploying to GitHub Pages (F7)

1. Create a new repository on GitHub (e.g. `padded-dorm-finder`).
2. Push this project to it:
   ```bash
   git remote add origin https://github.com/<your-username>/padded-dorm-finder.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
6. Wait a minute, then your live link will appear at the top of that Pages settings screen — usually:
   ```
   https://<your-username>.github.io/padded-dorm-finder/
   ```
7. Paste that link into this README under "Live demo" and into your submission.

### Alternative: Netlify (drag-and-drop, no CLI needed)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `padded` folder onto the page.
3. Netlify gives you a live URL immediately (e.g. `random-name-123.netlify.app`) — you can rename it in Site settings.

### Alternative: Vercel
1. Push the repo to GitHub first (steps 1–2 above).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, leave settings as default (static site), and deploy.

## Folder structure

```
padded/
├── index.html
├── listings.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── listings-data.js   (sample listing dataset)
│   ├── main.js             (nav toggle, greeting, clock, card renderer)
│   ├── listings.js         (search + filters)
│   └── contact.js          (form validation)
└── assets/thumbs/           (generated SVG illustrations per listing)
```
