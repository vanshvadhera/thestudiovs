import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50; // ~10s at 200ms interval

    const tryInitCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel && carouselRef.current) {
        const $carousel = window.$(carouselRef.current);
        if (!$carousel.data('owl.carousel')) {
          $carousel.owlCarousel({
            autoPlay: 10000,
            navigation: true,
            loop: true,
            nav: true,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              960: { items: 2 },
              1200: { items: 3 }
            }
          });
        }
        return true;
      }
      return false;
    };

    // Try immediately once
    if (tryInitCarousel()) return;

    const interval = setInterval(() => {
      attempts += 1;
      if (tryInitCarousel() || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const portfolioItems = [
    {
      image: '/templates.fabric-lab.co/archios/upload/architecture/s1.jpg',
      number: '01',
      category: 'buildings',
      title: 'The concept for better living',
      link: '/project/1'
    },
    {
      image: '/templates.fabric-lab.co/archios/upload/architecture/s2.jpg',
      number: '02',
      category: 'buildings',
      title: 'Dreams under construction',
      link: '/project/2'
    },
    {
      image: '/templates.fabric-lab.co/archios/upload/architecture/s3.jpg',
      number: '03',
      category: 'buildings',
      title: 'Shaping for a better future',
      link: '/project/3'
    },
    {
      image: '/templates.fabric-lab.co/archios/upload/architecture/s1.jpg',
      number: '04',
      category: 'buildings',
      title: 'The concept for better living',
      link: '/project/4'
    },
    {
      image: '/templates.fabric-lab.co/archios/upload/architecture/s2.jpg',
      number: '05',
      category: 'buildings',
      title: 'Dreams under construction',
      link: '/project/5'
    }
  ];

  return (
    <section className="scroller-section" id="work">
      <div className="section-title">
        <span>05</span>
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
            {portfolioItems.map((item, index) => (
              <div key={index} className="item">
                <div className="scroller-post">
                  <div className="image-holder">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="hover-box">
                    <span>{item.number}</span>
                    <Link
                      className="cat-link"
                      to="/portfolio"
                    >
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
