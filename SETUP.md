# Setup Instructions

## Quick Start

1. **Link the templates folder to public directory:**
   ```bash
   cd /Users/vanshvadhera/thestudiovs
   ln -s ../templates.fabric-lab.co public/templates.fabric-lab.co
   ```
   
   Or if you prefer to copy it:
   ```bash
   cp -r templates.fabric-lab.co public/
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Important Notes

- All static assets (CSS, JS, images) are served from the `public` folder
- The `templates.fabric-lab.co` folder must be accessible from `public/templates.fabric-lab.co`
- jQuery and other plugins are loaded dynamically from the public folder
- Google Maps API may require an API key for production use

## Troubleshooting

### Assets not loading
- Make sure `templates.fabric-lab.co` is linked/copied to `public/`
- Check browser console for 404 errors
- Verify file paths in components match the public folder structure

### jQuery plugins not working
- Check browser console for JavaScript errors
- Ensure all script files are loading correctly
- Wait a few seconds after page load for plugins to initialize

### Google Maps not showing
- The map requires an internet connection
- For production, you may need to add a Google Maps API key
- Check browser console for map-related errors
