# Setup Instructions

## Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- App images live in `src/assets` and are imported through `src/assets/index.js`
- Vendor CSS/JS live in `public/assets`
- Google Maps may require an API key for production use

## Troubleshooting

### Assets not loading
- Confirm files exist under `public/assets/css` and `public/assets/js`
- Check the browser console for 404s

### Scripts not initializing
- Wait for vendor scripts to finish loading (carousel, map, isotope)
- Soft-refresh the browser after a cold start
