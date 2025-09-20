# CSE Motors – Assignment 1 Starter (EJS)

This repo provides a minimal Express + EJS project with partials and mobile‑first CSS to build the **CSE Motors** home view. All code is original—no templates or frameworks.

## Folders
- `views/partials/head.ejs` – `<head>` and stylesheet link (`media="screen"`), skip link start
- `views/partials/header.ejs` – banner + brand + hamburger
- `views/partials/nav.ejs` – primary nav (ARIA / aria-current)
- `views/partials/footer.ejs` – footer + tiny JS for year + nav toggle
- `views/index.ejs` – home view (hero + cards + info strip + contact)
- `public/css/styles.css` – **mobile-first** CSS, one media query at 900px
- `public/images/` – hero and card placeholders (replace with provided images)

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Accessibility & Frontend Checklist
- Semantic landmarks: header/nav/main/section/footer
- Skip link, focus outlines, sufficient color contrast
- Mobile-first CSS, responsive layout, no horizontal scroll on small screens
- Validate HTML/CSS, test with WAVE extension

## Deploy to Render
1. Push to GitHub
2. Create a new **Web Service** on Render
3. Build command: `npm install`
4. Start command: `npm start`
5. After deploy, test the production URL thoroughly

Submit **both**: the Render production URL and the GitHub repo URL.
