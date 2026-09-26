# demo.io — Static e-Commerce Storefront

A clean, dependency-free e-commerce **front end** built with plain HTML, CSS, and JavaScript. No framework, no build step, no backend — just static files that deploy straight to GitHub Pages.

**Live demo:** https://muraa-p.github.io/demo.io/

## What it includes

| Page | Description |
|---|---|
| `index.html` | Landing page with hero section and featured content |
| `products.html` | Product listing / catalogue view |
| `cart.html` | Shopping cart view |
| `about.html` | About / contact page |

```
.
├── index.html      # Landing page
├── products.html   # Product catalogue
├── cart.html       # Cart
├── about.html      # About page
├── css/
│   └── styles.css  # All styling
├── js/
│   └── main.js     # Interactivity (cart, nav, rendering)
└── assets/         # Images and icons
```

## Getting started

Because there is no build step, you can run it any of three ways.

**Option 1 — just open it**

```bash
git clone https://github.com/muraa-p/demo.io.git
cd demo.io
start index.html        # Windows
open  index.html        # macOS / Linux
```

**Option 2 — local server** (recommended, avoids browser file:// quirks)

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

**Option 3 — fork and deploy your own**

1. Click **Fork** at the top right of this page
2. In your fork, go to **Settings → Pages**
3. Set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`
4. Your store goes live at `https://<your-username>.github.io/demo.io/`

## Deploying your own version

Every push to `main` automatically republishes the site through GitHub Actions, using the workflow in `.github/workflows/`. There is nothing else to configure.

## Customising

- **Colours and layout** — edit `css/styles.css`
- **Products** — the catalogue is rendered from `js/main.js`; edit the data there to change items
- **Images** — drop files into `assets/` and reference them in the markup
- **Store name** — search for `eCommerce Store` across the HTML files

## Notes and limitations

This is a **front-end only** template. Product data is static and lives in JavaScript — there is no database, no cart persistence across devices, no payments, and no authentication. It is intended as a starting point or a learning reference, not a production storefront. Wiring up a real backend is left as an exercise.

## License

MIT — see [LICENSE](LICENSE). Free to use, modify, and ship.
