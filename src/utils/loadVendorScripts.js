const VENDOR_SCRIPTS = [
  '/assets/js/jquery.min.js',
  '/assets/js/jquery.migrate.js',
  '/assets/js/jquery-ui.min.js',
  '/assets/js/bootstrap.min.js',
  '/assets/js/owl.carousel.min.js',
  '/assets/js/jquery.imagesloaded.min.js',
  '/assets/js/jquery.isotope.min.js',
  '/assets/js/jquery.magnific-popup.min.js',
  '/assets/js/pathLoader.js',
  '/assets/js/gmap3.min.js',
];

const loadScript = (src) =>
  new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });

const initSmoothScroll = () => {
  if (!window.$) return;

  // Avoid stacking duplicate handlers if scripts reload
  window.$(document).off('click.navSmoothScroll', '.navigation-menu-list a[href^="#"]');
  window.$(document).on('click.navSmoothScroll', '.navigation-menu-list a[href^="#"]', function (e) {
    const href = window.$(this).attr('href');
    if (!href || !href.startsWith('#')) return;

    const target = window.$(href);
    if (!target.length) return;

    e.preventDefault();
    window.$('html, body').stop().animate({
      scrollTop: target.offset().top,
    }, 500);
  });
};

const loadGoogleMaps = () =>
  new Promise((resolve) => {
    if (window.google) {
      resolve();
      return;
    }

    const existing = document.querySelector('script[src*="maps.google.com"]');
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => resolve());
      return;
    }

    const mapsScript = document.createElement('script');
    mapsScript.src = 'https://maps.google.com/maps/api/js?language=en';
    mapsScript.async = true;
    mapsScript.onload = () => resolve();
    mapsScript.onerror = () => resolve();
    document.body.appendChild(mapsScript);
  });

export const loadVendorScripts = async () => {
  for (const src of VENDOR_SCRIPTS) {
    await loadScript(src);
  }
  await loadGoogleMaps();
  initSmoothScroll();
};
