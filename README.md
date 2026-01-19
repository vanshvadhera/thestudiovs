# The Studio Vs - React Application

This is a React.js conversion of the original HTML architecture website template.

## Features

- ✅ Initial page loader with SVG animation
- ✅ Hero slider with parallax effects, play/pause, navigation controls
- ✅ Services section
- ✅ Team section with hover effects
- ✅ Alternative Services with tabs and accordion
- ✅ Portfolio/Work section with Owl Carousel
- ✅ Blog section
- ✅ Contact form with Google Maps integration
- ✅ Footer with Instagram feed
- ✅ Smooth scrolling navigation
- ✅ Responsive design
- ✅ All original functionality preserved

## Installation

1. **Important**: Make sure the `templates.fabric-lab.co` folder is accessible in the `public` directory. 
   - If it's in the root directory, you can either:
     - Move it: `mv templates.fabric-lab.co public/`
     - Or create a symlink: `ln -s ../templates.fabric-lab.co public/templates.fabric-lab.co`
   - The React app serves static files from the `public` folder, so all assets need to be accessible from there.

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
  components/
    InitialLoader.js    # Initial page loader
    Header.js           # Navigation header
    HeroSlider.js       # Hero slider with all controls
    Services.js         # Services section
    Team.js             # Team members section
    AlternativeServices.js  # Tabs and accordion section
    Work.js             # Portfolio/Work section
    Blog.js             # Blog posts section
    Contact.js          # Contact form and map
    Footer.js           # Footer component
  App.js               # Main app component
  App.css              # CSS imports
  index.js             # Entry point
  index.css            # Global styles and custom slider styles
```

## Dependencies

- React 18.2.0
- React Router DOM 6.8.0
- jQuery (loaded from public folder)
- Bootstrap 5.2.3
- Owl Carousel (loaded from public folder)

## Notes

- All CSS files are imported from the `public/templates.fabric-lab.co/archios/css/` directory
- JavaScript libraries (jQuery, Owl Carousel, etc.) are loaded from the `public/templates.fabric-lab.co/archios/js/` directory
- Images are referenced from the `public/templates.fabric-lab.co/archios/upload/` directory
- The Google Maps API key may need to be configured for the contact map to work properly

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile devices
