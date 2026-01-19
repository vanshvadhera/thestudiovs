import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import BlogListing from './pages/BlogListing';
import SingleProject from './pages/SingleProject';
import SinglePost from './pages/SinglePost';

function App() {
  useEffect(() => {
    // Initialize jQuery plugins after component mounts
    const initJQueryPlugins = () => {
      if (window.$) {
        // Initialize smooth scroll for navigation
        window.$('.navigation-menu-list a[href^="#"]').on('click', function(e) {
          const href = window.$(this).attr('href');
          if (!href || !href.startsWith('#')) return;

          e.preventDefault();
          const target = window.$(href);
          if (target.length) {
            window.$('html, body').stop().animate({
              scrollTop: target.offset().top
            }, 500);
          }
        });

        // Active menu during scroll
        const topMenu = window.$('.navigation-menu-list');
        // Only consider in-page anchor links (starting with #)
        const menuItems = topMenu.find('a[href^="#"]');
        const scrollItems = menuItems
          .map(function() {
            const href = window.$(this).attr('href');
            if (!href || !href.startsWith('#')) return null;
            const item = window.$(href);
            return item.length ? item : null;
          })
          .filter(Boolean);

        window.$(window).scroll(function() {
          const fromTop = window.$(this).scrollTop() + 10;
          const cur = scrollItems
            .map(function() {
              if (window.$(this).offset().top < fromTop) return this;
              return null;
            })
            .filter(Boolean);
          const current = cur[cur.length - 1];
          const id = current && current.length ? current[0].id : '';

          menuItems.parent().removeClass('active')
            .end().filter(`[href='#${id}']`).parent().addClass('active');
        });
      }
    };

    // Load jQuery and dependencies
    const loadScripts = () => {
      // Check if scripts are already loaded
      if (window.$ && window.$.fn.owlCarousel) {
        setTimeout(initJQueryPlugins, 100);
        return;
      }

      const scripts = [
        '/templates.fabric-lab.co/archios/js/jquery.min.js',
        '/templates.fabric-lab.co/archios/js/jquery.migrate.js',
        '/templates.fabric-lab.co/archios/js/jquery-ui.min.js',
        '/templates.fabric-lab.co/archios/js/bootstrap.min.js',
        '/templates.fabric-lab.co/archios/js/owl.carousel.min.js',
        // portfolio grid & masonry layout (no global template handlers)
        '/templates.fabric-lab.co/archios/js/jquery.imagesloaded.min.js',
        '/templates.fabric-lab.co/archios/js/jquery.isotope.min.js',
        '/templates.fabric-lab.co/archios/js/pathLoader.js',
        '/templates.fabric-lab.co/archios/js/gmap3.min.js'
      ];

      let loaded = 0;
      scripts.forEach((src) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          loaded++;
          if (loaded === scripts.length) {
            loadGoogleMaps();
          }
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => {
          loaded++;
          if (loaded === scripts.length) {
            loadGoogleMaps();
          }
        };
        script.onerror = () => {
          loaded++;
          if (loaded === scripts.length) {
            loadGoogleMaps();
          }
        };
        document.body.appendChild(script);
      });
    };

    const loadGoogleMaps = () => {
      if (window.google && window.$.fn.gmap3) {
        setTimeout(initJQueryPlugins, 100);
        return;
      }

      const existingMapsScript = document.querySelector('script[src*="maps.google.com"]');
      if (!existingMapsScript) {
        const mapsScript = document.createElement('script');
        mapsScript.src = 'http://maps.google.com/maps/api/js?&sensor=false&language=en';
        mapsScript.async = true;
        mapsScript.onload = () => {
          setTimeout(initJQueryPlugins, 100);
        };
        mapsScript.onerror = () => {
          setTimeout(initJQueryPlugins, 100);
        };
        document.body.appendChild(mapsScript);
      } else {
        setTimeout(initJQueryPlugins, 100);
      }
    };

    // Wait a bit for DOM to be ready
    setTimeout(loadScripts, 100);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/project/:id" element={<SingleProject />} />
          <Route path="/blog/:id" element={<SinglePost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
