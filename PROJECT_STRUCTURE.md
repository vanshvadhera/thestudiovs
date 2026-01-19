# Project Structure

## React Application Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header (used on all pages)
│   ├── Footer.js       # Footer component (used on all pages)
│   ├── Layout.js       # Layout wrapper with Header, Footer, and Loader
│   ├── InitialLoader.js # Initial page loader
│   ├── HeroSlider.js   # Home page hero slider
│   ├── Services.js     # Services section
│   ├── Team.js         # Team members section
│   ├── AlternativeServices.js # Tabs and accordion section
│   ├── Work.js         # Portfolio preview section
│   ├── Blog.js         # Blog preview section
│   └── Contact.js      # Contact form and map
│
├── pages/              # Page components (routes)
│   ├── Home.js         # Home page (/)
│   ├── Portfolio.js    # Portfolio listing page (/portfolio)
│   ├── BlogListing.js # Blog listing page (/blog)
│   ├── SingleProject.js # Single project page (/project/:id)
│   └── SinglePost.js   # Single blog post page (/blog/:id)
│
├── App.js              # Main app component with routing
├── App.css             # App-specific styles
├── index.js            # Entry point
└── index.css           # Global styles

public/
├── index.html          # HTML template
└── templates.fabric-lab.co/  # Static assets (CSS, JS, images)
    └── archios/
        ├── css/        # All CSS files
        ├── js/         # All JavaScript files
        └── upload/     # Images and media
```

## Routes

- `/` - Home page with all sections
- `/portfolio` - Portfolio listing page with filter
- `/blog` - Blog listing page
- `/project/:id` - Single project detail page
- `/blog/:id` - Single blog post page

## Features

### Home Page
- Hero slider with parallax effects
- Services grid
- Team members
- Alternative services (tabs & accordion)
- Portfolio preview (Owl Carousel)
- Blog preview
- Contact form with Google Maps

### Portfolio Page
- Isotope filtering
- Masonry grid layout
- Project cards with hover effects

### Blog Pages
- Blog listing with pagination
- Single post with comments
- Sidebar with categories, recent posts, archives, tags

### Single Project Page
- Project details
- Image gallery with Magnific Popup
- Project information overlay

## Navigation

- Header is shared across all pages
- Footer is shared across all pages
- Initial loader appears on all pages
- Smooth scrolling for anchor links on home page
- React Router for page navigation

## Dependencies

- React 18.2.0
- React Router DOM 6.8.0
- jQuery (loaded from public folder)
- Bootstrap 5.2.3
- Owl Carousel (loaded from public folder)
- Isotope (for portfolio filtering)
- Magnific Popup (for image galleries)
