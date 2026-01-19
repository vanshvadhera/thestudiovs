import React, { useEffect } from 'react';

const InitialLoader = () => {
  useEffect(() => {
    const initLoader = () => {
      const container = document.getElementById('ip-container');
      if (!container) return;

      const header = container.querySelector('div.ip-header');
      const loaderCircle = document.getElementById('ip-loader-circle');
      
      if (!loaderCircle) {
        // Fallback: if no loader circle, just show content after a delay
        setTimeout(() => {
          if (container) {
            container.classList.remove('loading');
            container.classList.add('loaded');
            document.body.classList.add('layout-switch');
          }
        }, 1000);
        return;
      }

      const classie = {
        add: (el, className) => el?.classList.add(className),
        remove: (el, className) => el?.classList.remove(className)
      };

      const noscroll = () => {
        window.scrollTo(0, 0);
      };

      // Fallback timeout - show content after 5 seconds max
      const fallbackTimeout = setTimeout(() => {
        classie.remove(container, 'loading');
        classie.add(container, 'loaded');
        document.body.classList.add('layout-switch');
        window.removeEventListener('scroll', noscroll);
      }, 5000);

      const support = { animations: true };
      const animEndEventNames = {
        'WebkitAnimation': 'webkitAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd',
        'animation': 'animationend'
      };
      const animEndEventName = animEndEventNames['animation'] || 'animationend';

      const onEndInitialAnimation = function() {
        if (support.animations) {
          container.removeEventListener(animEndEventName, onEndInitialAnimation);
        }
        startLoading();
      };

      window.addEventListener('scroll', noscroll);
      classie.add(container, 'loading');

      if (support.animations) {
        container.addEventListener(animEndEventName, onEndInitialAnimation);
      } else {
        onEndInitialAnimation();
      }

      function startLoading() {
        // Try to use PathLoader if available, otherwise use simple timeout
        if (window.PathLoader && loaderCircle) {
          try {
            const loader = new window.PathLoader(loaderCircle);
            
            const simulationFn = function(instance) {
              let progress = 0;
              const interval = setInterval(function() {
                progress = Math.min(progress + Math.random() * 0.1, 1);
                if (instance && instance.setProgress) {
                  instance.setProgress(progress);
                }

                if (progress >= 1) {
                  clearInterval(interval);
                  clearTimeout(fallbackTimeout);
                  classie.remove(container, 'loading');
                  classie.add(container, 'loaded');

                  const onEndHeaderAnimation = function(ev) {
                    if (support.animations) {
                      if (ev.target !== header) return;
                      container.removeEventListener(animEndEventName, onEndHeaderAnimation);
                    }
                    classie.add(document.body, 'layout-switch');
                    window.removeEventListener('scroll', noscroll);
                  };

                  if (support.animations) {
                    header?.addEventListener(animEndEventName, onEndHeaderAnimation);
                  } else {
                    onEndHeaderAnimation();
                  }
                }
              }, 80);
            };

            if (loader && loader.setProgressFn) {
              loader.setProgressFn(simulationFn);
            } else {
              // Fallback if setProgressFn doesn't exist
              setTimeout(() => {
                clearTimeout(fallbackTimeout);
                classie.remove(container, 'loading');
                classie.add(container, 'loaded');
                document.body.classList.add('layout-switch');
                window.removeEventListener('scroll', noscroll);
              }, 2000);
            }
          } catch (error) {
            console.log('PathLoader error:', error);
            // Fallback on error
            setTimeout(() => {
              clearTimeout(fallbackTimeout);
              classie.remove(container, 'loading');
              classie.add(container, 'loaded');
              document.body.classList.add('layout-switch');
              window.removeEventListener('scroll', noscroll);
            }, 2000);
          }
        } else {
          // No PathLoader available, use simple timeout
          setTimeout(() => {
            clearTimeout(fallbackTimeout);
            classie.remove(container, 'loading');
            classie.add(container, 'loaded');
            document.body.classList.add('layout-switch');
            window.removeEventListener('scroll', noscroll);
          }, 2000);
        }
      }
    };

    // Wait for DOM and PathLoader
    let checkCount = 0;
    const maxChecks = 50; // 5 seconds max wait
    
    const checkPathLoader = setInterval(() => {
      checkCount++;
      const container = document.getElementById('ip-container');
      
      if (container && (window.PathLoader || checkCount >= maxChecks)) {
        clearInterval(checkPathLoader);
        setTimeout(initLoader, 100);
      }
    }, 100);

    return () => clearInterval(checkPathLoader);
  }, []);

  return (
    <div className="ip-header">
      <p className="ip-logo">
        <img src="/templates.fabric-lab.co/archios/images/logo.png" alt="Logo" />
      </p>
      <div className="ip-loader">
        <svg className="ip-inner" width="100px" height="100px" viewBox="0 0 80 80">
          <path
            className="ip-loader-circlebg"
            d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
          />
          <path
            id="ip-loader-circle"
            className="ip-loader-circle"
            d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
          />
        </svg>
      </div>
    </div>
  );
};

export default InitialLoader;
