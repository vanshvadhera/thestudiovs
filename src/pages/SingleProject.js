import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../assets/projects';

const SingleProject = () => {
  const { id } = useParams();
  const project =
    projects.find((item) => String(item.id) === String(id)) || projects[0];

  useEffect(() => {
    if (window.$ && window.$.fn.magnificPopup) {
      window.$('.zoom').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
        },
      });
    }
  }, [project]);

  const galleryImages = projects
    .filter((item) => item.id !== project.id)
    .slice(0, 8);

  return (
    <>
      <section className="page-banner-section">
        <div className="container">
          <h1>{project.title}</h1>
          <p>Architecture | Design | Build</p>
        </div>
      </section>

      <section className="single-project-section">
        <div className="section-title">
          <h1>Projects</h1>
        </div>

        <div className="container">
          <div className="single-project-content">
            <div className="feature-image">
              <img src={project.image} alt={project.title} />
              <div className="hover-feature">
                <h2>{project.title}</h2>
                <div className="project-content">
                  <ul className="project-data-list">
                    <li>
                      <span className="data-name">Studio</span>
                      <span className="data-text">TheStudioVS</span>
                    </li>
                    <li>
                      <span className="data-name">Category</span>
                      <span className="data-text">{project.category}</span>
                    </li>
                    <li>
                      <span className="data-name">Location</span>
                      <span className="data-text">Noida</span>
                    </li>
                    <li>
                      <span className="data-name">Url</span>
                      <span className="data-text">www.thestudiovs.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-content">
              <p>
                At TheStudioVS, each project is shaped as an experience — balancing
                form, function, material honesty, and long-term performance into
                carefully composed environments.
              </p>
            </div>
          </div>
          <ul className="gallery-list">
            {galleryImages.map((item) => (
              <li key={item.id}>
                <a href={item.image} className="zoom">
                  <img src={item.image} alt={item.title} />
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
