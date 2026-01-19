import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  useEffect(() => {
    // Initialize Isotope for portfolio filtering
    if (window.$ && window.$.fn.isotope) {
      const $container = window.$('.iso-call');
      if ($container.length) {
        $container.imagesLoaded(function() {
          $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
              duration: 750,
              easing: 'linear'
            }
          });
        });
      }

      // Filter functionality
      window.$('.filter a').on('click', function(e) {
        e.preventDefault();
        const selector = window.$(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        window.$('.filter li a').removeClass('active');
        window.$(this).addClass('active');
      });
    }
  }, []);

  const portfolioItems = [
    {
      id: 1,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio1.jpg',
      category: 'interior',
      title: 'Influenced by Power',
      link: '/project/1'
    },
    {
      id: 2,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio2.jpg',
      category: 'houses villas',
      title: 'Influenced by Power',
      link: '/project/2'
    },
    {
      id: 3,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio3.jpg',
      category: 'interior',
      title: 'Thoughtfully making Space',
      link: '/project/3'
    },
    {
      id: 4,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio4.jpg',
      category: 'buildings',
      title: 'Unique Solution',
      link: '/project/4'
    },
    {
      id: 5,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio5.jpg',
      category: 'wood',
      title: 'Magnificent Assembled',
      link: '/project/5'
    },
    {
      id: 6,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio6.jpg',
      category: 'exterior houses',
      title: 'Innovation in Craft',
      link: '/project/6'
    },
    {
      id: 7,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio7.jpg',
      category: 'wood',
      title: 'Well-simplified design',
      link: '/project/7'
    },
    {
      id: 8,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio8.jpg',
      category: 'buildings metal',
      title: 'Design your dreams with us',
      link: '/project/8'
    },
    {
      id: 9,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio9.jpg',
      category: 'exterior houses villas',
      title: 'Level of evolution',
      link: '/project/9'
    },
    {
      id: 10,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio10.jpg',
      category: 'metal',
      title: 'You bet it looks so good',
      link: '/project/10'
    },
    {
      id: 11,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio11.jpg',
      category: 'buildings',
      title: 'The Joy of Living',
      link: '/project/11'
    },
    {
      id: 12,
      image: '/templates.fabric-lab.co/archios/upload/architecture/portfolio/portfolio12.jpg',
      category: 'interior',
      title: 'The Joy of Living',
      link: '/project/12'
    }
  ];

  return (
    <>
      <section className="page-banner-section">
        <div className="container">
          <h1>Portfolio</h1>
          <p>The modern architect with innovation</p>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-title">
          <h1>Portfolio</h1>
        </div>
        <div className="container">
          <div className="portfolio-box iso-call">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`portfolio-post ${item.category}`}
              >
                <figure className="effect-milo">
                  <img src={item.image} alt={item.title} />
                  <figcaption>
                    <p>{item.category.split(' ')[0]}</p>
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
