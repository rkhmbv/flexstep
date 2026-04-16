# Toe Align

Lightweight hallux valgus exercise app built as a static single-page site.

## Open it

Open `/Users/rakhimbai/Documents/New project/index.html` in a browser.

## Deploy to GitHub Pages

This repo includes `/Users/rakhimbai/Documents/New project/.github/workflows/deploy-pages.yml` so GitHub can deploy the static site automatically from the `main` branch.

After the repo is pushed to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` or rerun the `Deploy GitHub Pages` workflow.

Your live URL will be:

`https://<github-username>.github.io/<repo-name>/`

## What it includes

- A hallux valgus-focused landing page
- Exercise categories across foot, ankle, knee, hip, and balance work
- Goal filters for pain relief, mobility, foot strength, balance, and walking comfort
- A simple session builder that suggests a short routine
- Persistent points, day streaks, and milestone tracking with `localStorage`
- Spotify playlist pairing, plus a placeholder OAuth connect flow

## Notes

This project is educational and should not replace personalized medical care.

To enable Spotify OAuth, replace `YOUR_SPOTIFY_CLIENT_ID` in `/Users/rakhimbai/Documents/New project/app.js` with your Spotify app client ID.
