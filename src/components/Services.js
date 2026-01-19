import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-university',
      title: 'Construction',
      description: 'touch the Sky',
      link: '/project/1'
    },
    {
      icon: 'fas fa-brush',
      title: 'Interior Design',
      description: 'Create your dream house',
      link: '/project/2'
    },
    {
      icon: 'fas fa-paint-roller',
      title: 'Design And Build',
      description: 'From imagination to real',
      link: '/project/3'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Consulting',
      description: 'Shapping for a better future',
      link: '/project/4'
    },
    {
      icon: 'fas fa-wrench',
      title: 'Special Projects',
      description: 'Building castle out of waste',
      link: '/project/5'
    },
    {
      icon: 'fas fa-laptop-house',
      title: 'House Renvation',
      description: 'Dreams under construction',
      link: '/project/6'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-title">
        <span>02</span>
        <h1>Services</h1>
      </div>
      <div className="container">
        <div className="title-box">
          <span>professional services</span>
          <h2>Services we offer</h2>
        </div>
        <div className="services-box">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="services-post">
                  <Link to={service.link}>
                    <i className={service.icon}></i>
                  </Link>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
