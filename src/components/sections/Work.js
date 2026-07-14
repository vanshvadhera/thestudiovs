import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../assets/projects';

const Work = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50;

    const tryInitCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel && carouselRef.current) {
        const $carousel = window.$(carouselRef.current);
        if ($carousel.data('owl.carousel')) {
          $carousel.trigger('destroy.owl.carousel');
          $carousel.find('.owl-stage-outer').children().unwrap();
        }
        $carousel.owlCarousel({
          autoPlay: 10000,
          navigation: true,
          loop: true,
          nav: true,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            960: { items: 2 },
            1200: { items: 3 },
          },
        });
        return true;
      }
      return false;
    };

    if (tryInitCarousel()) return undefined;

    const interval = setInterval(() => {
      attempts += 1;
      if (tryInitCarousel() || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="scroller-section" id="work">
      <div className="section-title">
        <span>04</span>
        <h1>Work</h1>
      </div>
      <div className="container">
        <div className="title-box">
          <span>amazing projects</span>
          <h2>Our Portfolio</h2>
        </div>
        <div className="scroller-box owl-scroller">
          <div
            ref={carouselRef}
            className="owl-carousel owl-theme"
            data-num="3"
          >
            {projects.map((item) => (
              <div key={item.id} className="item">
                <div className="scroller-post">
                  <div className="image-holder">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="hover-box">
                    <span>{item.number}</span>
                    <Link className="cat-link" to="/portfolio">
                      {item.category}
                    </Link>
                    <h4>
                      <Link to={item.link}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
