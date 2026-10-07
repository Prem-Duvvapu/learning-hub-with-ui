# Learning Hub

One starting point for four independently deployed interactive learning apps.

Intended deployment: https://learning-hub-with-ui.vercel.app/

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

The build copies four static assets to `dist/`. GitHub Actions runs tests and
builds; Vercel handles hosting, like the four existing apps.

## Deploy on Vercel

1. Import `Prem-Duvvapu/learning-hub-with-ui` as a new Vercel project.
2. Keep the root directory as the repository root.
3. Use framework preset **Other**. The committed `vercel.json` sets the build
   command to `npm run build` and output directory to `dist`.
4. Deploy the `main` branch. No environment variables or backend are required.
5. Confirm the production URL is `https://learning-hub-with-ui.vercel.app`
   before merging the sibling apps' return links. If Vercel assigns another
   domain, update those links and their tests first.

Relative assets also support preview deployments and subpath hosting. The hub
does not require SPA rewrites: its sections are ordinary anchors on one page.

## Accessibility and privacy

Responsive cards, skip navigation, visible keyboard focus, 44px controls,
light/dark themes, and reduced-motion support. Vercel Web Analytics collects
visitor and page-view statistics using its hosted script. No embedded apps or
authentication. Optional localStorage keys:
`learning-hub-theme` and `learning-hub-last-subject`.

### Visitor analytics

The hub uses Vercel's static HTML integration, loading
`/_vercel/insights/script.js` with `defer`. No React component or npm package is
needed. See the [Vercel setup guide](https://vercel.com/docs/analytics/quickstart).

1. Enable **Web Analytics** for `learning-hub-with-ui` in the Vercel dashboard.
2. Deploy the updated `main` branch after enabling analytics.
3. Visit the deployed hub and check the browser Network panel for the analytics
   script and a page-view request, then check the Vercel Analytics dashboard.

Analytics records visits to the hub, not visits inside the four independent apps.
The analytics endpoint is supplied by Vercel and is unavailable on a plain local
static server; navigation and themes still work when analytics is blocked or
unavailable. No custom events are configured.

To change a destination, update both links in `index.html`, the contract test,
and `LearningNetworkNav` in each sibling app. The recent-subject destination
comes from the catalog, never a stored URL. Browser-level verification should
cover same-tab navigation, Back, both themes, blocked storage, keyboard access,
and narrow screens.
