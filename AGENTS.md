# Learning Hub

Static, dependency-free entry point for four independently deployed learning apps.
Use native same-tab anchors, relative asset paths, accessible keyboard navigation,
and responsive light/dark theme tokens. Do not embed the apps in iframes or imply
that their progress, accounts, or storage are shared.

Run `npm test` and `npm run build`. Do not start servers automatically.
Work on a feature branch, open a PR, and merge only after green CI.
Vercel publishes `dist` using `vercel.json`; the user connects and deploys the repo.
GitHub Actions runs tests and builds only, not a second hosting service.
