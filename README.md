# Invitación: 15 años de Justin

A small Spanish-language invitation card for the Ruiz family, with an RSVP form. No build step,
free hosting on GitHub Pages, RSVPs collected with a free Formspree form.

## Run locally
    npx serve .
Then open http://localhost:3000

## One-time RSVP setup (Formspree, free, no card)
1. Go to https://formspree.io and create a free account (use whichever email should receive RSVP
   notifications).
2. Click **New Form**, name it (e.g. "Justin 15 años"), and create it.
3. Copy the endpoint it gives you, like `https://formspree.io/f/abcdwxyz`.
4. Paste it into `rsvp-config.js` in place of `PASTE_FORMSPREE_ENDPOINT`.
5. Submit the form once yourself (locally or live). Formspree asks you to confirm the first
   submission by email before it activates.
6. RSVPs then show up in your Formspree dashboard and arrive by email. Free plan: 50 submissions
   a month, which is enough for a family celebration.

## Hosting on GitHub Pages
1. Create a new **public** repository on GitHub (no README).
2. `git remote add origin https://github.com/<username>/<repo>.git`
3. `git push -u origin main`
4. In the repo, **Settings > Pages > Deploy from a branch > main / (root) > Save**.
5. The invitation is live at `https://<username>.github.io/<repo>/`.

## Party date
The party date and time are placeholders in `index.html` (`#party-date`, `#party-time`) until
they're confirmed.

## Front cover photo
The card opens like a greeting card: a front cover with a photo and "¡Feliz Cumpleaños, Justin!",
then a tap reveals the invitation inside. To add a real photo, save it in this folder as
`cover.jpg` (any portrait-ish photo works well) — no code change needed. Until then, a decorative
placeholder shows automatically.
