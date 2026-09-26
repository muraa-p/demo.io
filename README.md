# demo.io â€” Static e-Commerce Storefront

A clean, dependency-free e-commerce **front end** built with plain HTML, CSS, and JavaScript. No framework, no build step, no backend â€” just static files that deploy straight to GitHub Pages.

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
â”œâ”€â”€ index.html      # Landing page
â”œâ”€â”€ products.html   # Product catalogue
â”œâ”€â”€ cart.html       # Cart
â”œâ”€â”€ about.html      # About page
â”œâ”€â”€ css/
â”‚   â””â”€â”€ styles.css  # All styling
â”œâ”€â”€ js/
â”‚   â””â”€â”€ main.js     # Interactivity (cart, nav, rendering)
â””â”€â”€ assets/         # Images and icons
```

## Getting started

Because there is no build step, you can run it any of three ways.

**Option 1 â€” just open it**

```bash
git clone https://github.com/muraa-p/demo.io.git
cd demo.io
start index.html        # Windows
open  index.html        # macOS / Linux
```

**Option 2 â€” local server** (recommended, avoids browser file:// quirks)

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

**Option 3 â€” fork and deploy your own**

1. Click **Fork** at the top right of this page
2. In your fork, go to **Settings â†’ Pages**
3. Set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`
4. Your store goes live at `https://<your-username>.github.io/demo.io/`

## Deploying your own version

Every push to `main` automatically republishes the site through GitHub Actions, using the workflow in `.github/workflows/`. There is nothing else to configure.

## Customising

- **Colours and layout** â€” edit `css/styles.css`
- **Products** â€” the catalogue is rendered from `js/main.js`; edit the data there to change items
- **Images** â€” drop files into `assets/` and reference them in the markup
- **Store name** â€” search for `eCommerce Store` across the HTML files

## Notes and limitations

This is a **front-end only** template. Product data is static and lives in JavaScript â€” there is no database, no cart persistence across devices, no payments, and no authentication. It is intended as a starting point or a learning reference, not a production storefront. Wiring up a real backend is left as an exercise.

## License

MIT â€” see [LICENSE](LICENSE). Free to use, modify, and ship.
