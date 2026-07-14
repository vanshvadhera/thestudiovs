# Project Structure

```
src/
├── assets/                 # App images (imported by components)
│   ├── images/
│   └── index.js
├── components/
│   ├── layout/             # Shared shell
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   └── InitialLoader.js
│   └── sections/           # Home page sections
│       ├── HeroSlider.js
│       ├── Services.js
│       ├── Team.js
│       ├── AlternativeServices.js
│       ├── Work.js
│       ├── Blog.js
│       └── Contact.js
├── navigation/             # Routes + nav config
│   ├── AppRouter.js
│   └── navItems.js
├── pages/                  # Route pages
│   ├── Home.js
│   ├── Portfolio.js
│   ├── BlogListing.js
│   ├── SingleProject.js
│   └── SinglePost.js
├── styles/
│   ├── App.css
│   └── index.css
├── utils/
│   └── loadVendorScripts.js
├── App.js
└── index.js

public/
├── index.html
└── assets/                 # Vendor CSS/JS/fonts
    ├── css/
    ├── js/
    ├── images/
    └── upload/
```

## Routes

- `/` — Home
- `/portfolio` — Portfolio listing
- `/blog` — Blog listing
- `/project/:id` — Project detail
- `/blog/:id` — Blog post detail
