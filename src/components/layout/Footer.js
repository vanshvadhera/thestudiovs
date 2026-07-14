import React from 'react';
import { images } from '../../assets';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="template-footer">
        <a className="go-top" href="#top" onClick={scrollToTop}>
          <i className="far fa-arrow-alt-circle-up"></i>
        </a>

        <div className="instagram-line">
          <div className="container">
            <ul className="insta-list">
              {images.instagram.map((image, index) => (
                <li key={index}>
                  <a href="/" aria-label={`Instagram image ${index + 1}`}>
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
                  <h5>Location</h5>
                  <ul className="custom-list">
                    <li>
                      <a href="#contact">C-109, Sector 100, Noida</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-widget-line">
                  <h5>Connect</h5>
                  <ul className="custom-list">
                    <li>
                      <a href="https://www.thestudiovs.com" target="_blank" rel="noreferrer">
                        www.thestudiovs.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-widget-line">
                  <h5>Get in Touch</h5>
                  <ul className="custom-list">
                    <li>
                      <a href="mailto:info@thestudiovs.com">
                        info@thestudiovs.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:9211296162">9211296162</a>
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
              <p>&copy; TheStudioVS {new Date().getFullYear()}</p>
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
