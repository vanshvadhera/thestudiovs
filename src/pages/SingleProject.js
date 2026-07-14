import React, { useEffect } from 'react';
import { images } from '../assets';

const SingleProject = () => {
  useEffect(() => {
    if (window.$ && window.$.fn.magnificPopup) {
      window.$('.zoom').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
        },
      });
    }
  }, []);

  const galleryImages = images.gallery.map((image, index) => ({
    id: index + 1,
    image,
  }));

  return (
    <>
      <section className="page-banner-section">
        <div className="container">
          <h1>Influenced by Power</h1>
          <p>The art of building</p>
        </div>
      </section>

      <section className="single-project-section">
        <div className="section-title">
          <h1>Projects</h1>
        </div>

        <div className="container">
          <div className="single-project-content">
            <div className="feature-image">
              <img src={images.projectFeature} alt="project" />
              <div className="hover-feature">
                <h2>Give your dreams a shape of reality</h2>
                <div className="project-content">
                  <ul className="project-data-list">
                    <li>
                      <span className="data-name">Client</span>
                      <span className="data-text">archios Architecture</span>
                    </li>
                    <li>
                      <span className="data-name">Category</span>
                      <span className="data-text">interior, exterior</span>
                    </li>
                    <li>
                      <span className="data-name">Date</span>
                      <span className="data-text">01 June, 2021</span>
                    </li>
                    <li>
                      <span className="data-name">Url</span>
                      <span className="data-text">www.fabric-lab.co</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
            </div>
          </div>
          <ul className="gallery-list">
            {galleryImages.map((item) => (
              <li key={item.id}>
                <a href={item.image} className="zoom">
                  <img src={item.image} alt={`Gallery ${item.id}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SingleProject;
