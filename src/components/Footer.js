import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // Go to top functionality
    const goTopBtn = document.querySelector('.go-top');
    if (goTopBtn) {
      goTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }, []);

  const instagramImages = [
    '/templates.fabric-lab.co/archios/upload/architecture/instagram/1.jpg',
    '/templates.fabric-lab.co/archios/upload/architecture/instagram/2.jpg',
    '/templates.fabric-lab.co/archios/upload/architecture/instagram/3.jpg',
    '/templates.fabric-lab.co/archios/upload/architecture/instagram/4.jpg',
    '/templates.fabric-lab.co/archios/upload/architecture/instagram/5.jpg',
    '/templates.fabric-lab.co/archios/upload/architecture/instagram/6.jpg',
    '/templates.fabric-lab.co/archios/upload/architecture/instagram/7.jpg',
    '/templates.fabric-lab.co/archios/upload/architecture/instagram/8.png'
  ];

  return (
    <>
      <footer className="template-footer">
        <a
          className="go-top"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <i className="far fa-arrow-alt-circle-up"></i>
        </a>

        <div className="instagram-line">
          <div className="container">
            <ul className="insta-list">
              {instagramImages.map((image, index) => (
                <li key={index}>
                  <a
                    href="/"
                    aria-label={`Instagram image ${index + 1}`}
                  >
                    <img src={image} alt={`Instagram ${index + 1}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="widget-part-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget-line">
                  <h5>Locations</h5>
                  <ul className="custom-list">
                    <li>
                      <a href="#contact">Melbourne</a>
                    </li>
                    <li>
                      <a href="#contact">Berlin</a>
                    </li>
                    <li>
                      <a href="#contact">New York</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-widget-line">
                  <h5>Connect</h5>
                  <ul className="custom-list">
                    <li>
                      <a href="/">instagram</a>
                    </li>
                    <li>
                      <a href="/">facebook</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-widget-line">
                  <h5>Get in Touch</h5>
                  <ul className="custom-list">
                    <li>
                      <a href="mailto:hello@Archiostheme.com">
                        hello@Archiostheme.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:005512006700">0055 1200 6700</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-last-line">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <p>&copy; Archios 2021</p>
            </div>
            <div className="col-sm-6">
              <ul className="social-list">
                <li>
                  <a href="/" aria-label="Facebook">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="/" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/" aria-label="Twitter">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
