import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-drafting-compass',
      title: 'Architectural Design',
      description:
        'Site-responsive architecture that balances form, function, climate, and constructability — from concept sketches to build-ready documentation.',
      link: '#contact'
    },
    {
      icon: 'fas fa-hard-hat',
      title: 'Design & Construction',
      description:
        'Integrating design with execution to maintain control over detailing, material quality, and on-site accuracy — minimizing gaps between vision and reality.',
      link: '#contact'
    },
    {
      icon: 'fas fa-key',
      title: 'Turnkey Delivery',
      description:
        'A single accountable partner for the full project lifecycle — planning, approvals, construction, interiors, and handover.',
      link: '#contact'
    },
    {
      icon: 'fas fa-couch',
      title: 'Interior Architecture',
      description:
        'Interiors as an extension of the architecture — focusing on flow, ergonomics, lighting, texture, and durability.',
      link: '#contact'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Structural Collaboration',
      description:
        'Working with engineering consultants on intelligent structural systems and custom solutions that support architectural intent and long-term safety.',
      link: '#contact'
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
          <span>what we do</span>
          <h2>Services we offer</h2>
        </div>
        <div className="services-box">
          <div className="row">
            {services.map((service, index) => (
              <div
                key={index}
                className={index < 3 ? 'col-lg-4 col-md-6' : 'col-lg-6 col-md-6'}
              >
                <div className="services-post">
                  <a href={service.link}>
                    <i className={service.icon}></i>
                  </a>
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
