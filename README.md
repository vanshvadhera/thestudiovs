# The Studio Vs - React Application

Architecture studio website built with React.

## Installation

```bash
npm install
npm start
```

Production build:

```bash
npm run build
```

## Project Structure

```
src/
├── assets/           # Images imported by the app
├── components/
│   ├── layout/       # Header, Footer, Layout, InitialLoader
│   └── sections/     # Home page sections
├── navigation/       # AppRouter + nav items
├── pages/            # Route pages
├── styles/           # Global CSS
└── utils/            # Vendor script loader

public/assets/        # Vendor CSS, JS, and fonts
```

See `PROJECT_STRUCTURE.md` for the full tree and routes.

## Dependencies

- React 18 + React Router
- Vendor libs (jQuery, Bootstrap, Owl Carousel, Isotope, Magnific Popup) loaded from `public/assets/js`
