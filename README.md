# Japan roadtrip itinerary PWA

This package turns the current itinerary HTML into an installable Progressive Web App.

## Test locally

Because service workers do not work from a plain `file://` URL, run a small local server:

```bash
cd japan-roadtrip-pwa
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

On Android, the proper install flow needs the package to be hosted on HTTPS, for example GitHub Pages, Netlify, Cloudflare Pages, or another simple web host. After opening the HTTPS link in Chrome, use **Install app** or **Add to Home screen**.

## Files

- `index.html` — the itinerary website.
- `manifest.webmanifest` — app name, icon, color and Android install metadata.
- `service-worker.js` — offline caching for the website shell and icons.
- `icons/` — app icons.

## Notes

The itinerary and embedded pictures are still inside the HTML. Online map tiles and Google Maps links need internet. The offline fallback map remains available from the HTML itself.
