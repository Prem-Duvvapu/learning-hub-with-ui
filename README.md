# Learning Hub

One starting point for four independently deployed interactive learning apps.

Live: https://prem-duvvapu.github.io/learning-hub-with-ui/

| Subject | Existing app |
| --- | --- |
| Data structures & algorithms | https://dsa-with-ui.vercel.app/ |
| Low-level design | https://lld-with-ui.vercel.app/ |
| High-level design | https://hld-with-ui.vercel.app/ |
| CS fundamentals | https://cs-fundamentals-with-ui.vercel.app/ |

Native links open in the same tab; Browser Back returns to the hub. Each app
retains its routes, backend, theme, and learning state. The hub remembers only
the last subject opened here, not progress. Navigation works without JavaScript.

## Development

No runtime or build dependencies. Use Node.js 22 or newer.

```sh
npm test
npm run build
```

The build copies four static assets to `dist/`. Relative asset URLs support
the GitHub Pages project subpath. GitHub Actions tests PRs and deploys main
after a passing build. Repository Pages uses GitHub Actions as its source.

## Accessibility and privacy

Responsive cards, skip navigation, visible keyboard focus, 44px controls,
light/dark themes, and reduced-motion support. No analytics, third-party scripts,
cookies, embedded apps, or authentication. Optional localStorage keys:
`learning-hub-theme` and `learning-hub-last-subject`.

To change a destination, update both links in `index.html`, the contract test,
and `LearningNetworkNav` in each sibling app. The recent-subject destination
comes from the catalog, never a stored URL. Browser-level verification should
cover same-tab navigation, Back, both themes, blocked storage, keyboard access,
and narrow screens.
