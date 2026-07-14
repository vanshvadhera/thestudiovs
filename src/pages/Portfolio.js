import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../assets/projects';

const Portfolio = () => {
  useEffect(() => {
    if (window.$ && window.$.fn.isotope) {
      const $container = window.$('.iso-call');
      if ($container.length) {
        $container.imagesLoaded(function () {
          $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
              duration: 750,
              easing: 'linear',
            },
          });
        });
      }

      window.$('.filter a').on('click', function (e) {
        e.preventDefault();
        const selector = window.$(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          },
        });
        window.$('.filter li a').removeClass('active');
        window.$(this).addClass('active');
      });
    }
  }, []);

  return (
    <>
      <section className="page-banner-section">
        <div className="container">
          <h1>Portfolio</h1>
          <p>Innovative Designs. Timeless Spaces.</p>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-title">
          <h1>Portfolio</h1>
        </div>
        <div className="container">
          <div className="portfolio-box iso-call">
            {projects.map((item) => (
              <div key={item.id} className={`portfolio-post ${item.category}`}>
                <figure className="effect-milo">
                  <img src={item.image} alt={item.title} />
                  <figcaption>
                    <p>{item.category}</p>
                    <h4>
                      <Link to={item.link}>{item.title}</Link>
                    </h4>
                    <Link to={item.link}>
                      <span className="material-icons-outlined">article</span>
                    </Link>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
