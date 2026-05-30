# Japan roadtrip itinerary 2026 - updated PWA

Built from: Japan roadtrip 2026-5.xlsx

Upload the contents of this folder to the root of your GitHub Pages repository.

Includes:
- updated `index.html` with the new Excel dates, route, map pins, notes and images
- existing PWA icon setup
- noindex/security discovery-reduction meta tags
- `robots.txt`
- `manifest.webmanifest`
- `service-worker.js`

After upload, wait 1-3 minutes and open:
https://easwoosh17.github.io/japan_roadtrip_itinerary_26/

If Android keeps an old icon/content, remove the installed app and clear site data for the URL.


## Cache refresh note
This package uses service worker cache name v3 and network-first loading for `index.html`, so future GitHub Pages updates should become visible faster while still supporting offline fallback.
