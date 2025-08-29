# EdgeLearn AI — Static Course Site

This is a no-build, drag‑and‑drop static website for an AI course with three pricing tiers.

## Quick start (GitHub Pages)
1. Create a new GitHub repo (public).
2. Drag and drop the files in this folder into the repo root.
3. Go to **Settings → Pages** and set Source to **Deploy from a branch**, choose **main** and `/ (root)`.
4. Wait for the green check, then your site will be live at `https://<your-username>.github.io/<repo>/`.

## Customize
- **Branding:** Update `<title>`, meta description, and `.brand` text in `index.html`. Replace `assets/logo.svg` with your logo (same name).
- **Pricing:** Edit the prices and features in the Pricing section.
- **Contact form:** Replace the `action` on the enroll form with your endpoint (e.g., Formspree, Netlify Forms, or your backend).
- **Colors/Style:** Tweak CSS variables at the top of `styles.css`.
- **Sections:** Modify About, Curriculum, and FAQ as needed.

## Local preview
Just open `index.html` in your browser. No build tools required.

## License
MIT — do whatever you want, no warranty.
