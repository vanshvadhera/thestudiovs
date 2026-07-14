import React, { useState } from 'react';
import { images } from '../../assets';

const AlternativeServices = () => {
  const [activeTab, setActiveTab] = useState('choose');
  const [activeAccordion, setActiveAccordion] = useState('collapseOne');
  const [tabDirection, setTabDirection] = useState('next');

  const whyChooseUs = [
    'Strong design clarity with practical build knowledge',
    'Direct involvement from concept to completion',
    'Honest material selection and detailing discipline',
    'Structured coordination with consultants and vendors',
    'Reliable execution timelines and site quality control',
    'Long-term performance mindset rather than short-term trends'
  ];

  const tabs = [
    {
      id: 'choose',
      label: 'why choose us',
      content: (
        <div className="why-choose-grid">
          {whyChooseUs.map((item, index) => (
            <div className="why-choose-item" key={item}>
              <span className="why-choose-num">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'mission',
      label: 'our mission',
      content: (
        <div className="mission-vision-card">
          <div className="mv-brand">
            <img src={images.logo} alt="TheStudioVS" className="mv-logo" />
            <span className="mv-label">Mission</span>
          </div>
          <blockquote className="mv-quote">
            To deliver architecture that is grounded in clarity, craftsmanship,
            and accountability — creating lasting value for clients, users, and
            the built environment.
          </blockquote>
          <div className="mv-pillars">
            <span>Clarity</span>
            <span>Craftsmanship</span>
            <span>Accountability</span>
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      label: 'our vision',
      content: (
        <div className="mission-vision-card">
          <div className="mv-brand">
            <img src={images.logo} alt="TheStudioVS" className="mv-logo" />
            <span className="mv-label">Vision</span>
          </div>
          <blockquote className="mv-quote">
            To shape meaningful spaces that quietly elevate everyday life through
            thoughtful design, intelligent construction, and timeless spatial
            character.
          </blockquote>
          <div className="mv-pillars">
            <span>Thoughtful Design</span>
            <span>Intelligent Build</span>
            <span>Timeless Character</span>
          </div>
        </div>
      )
    }
  ];

  const accordionItems = [
    {
      id: 'collapseOne',
      icon: 'fas fa-comments',
      title: 'Listen First',
      content:
        'We invest time in understanding client priorities, site conditions, budget realities, and future growth.'
    },
    {
      id: 'collapseTwo',
      icon: 'fas fa-pencil-ruler',
      title: 'Design with Purpose',
      content:
        'Concepts are developed through spatial logic, material thinking, and environmental response — not decoration.'
    },
    {
      id: 'collapseThree',
      icon: 'fas fa-drafting-compass',
      title: 'Resolve in Detail',
      content:
        'Drawings, coordination, and technical clarity ensure smooth execution on site.'
    },
    {
      id: 'collapseFour',
      icon: 'fas fa-hard-hat',
      title: 'Build with Discipline',
      content:
        'Quality checks, sequencing, and coordination maintain accuracy and timelines.'
    },
    {
      id: 'collapseFive',
      icon: 'fas fa-handshake',
      title: 'Deliver with Responsibility',
      content:
        'Projects are handed over with proper documentation, finish quality, and long-term usability.'
    }
  ];

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = tabs.findIndex((tab) => tab.id === tabId);
    setTabDirection(nextIndex > currentIndex ? 'next' : 'prev');
    setActiveTab(tabId);
  };

  const handleAccordionToggle = (itemId) => {
    setActiveAccordion((current) => (current === itemId ? '' : itemId));
  };

  return (
    <section className="tabs-collapse-section" id="about">
      <div className="section-title">
        <span>03</span>
        <h1>About</h1>
      </div>

      <div className="container">
        <div className="title-box">
          <span>about TheStudioVS</span>
          <h2>How we work</h2>
        </div>
        <div className="tabs-collapse">
          <div className="row">
            <div className="col-lg-6">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tabs.map((tab) => (
                  <li key={tab.id} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => handleTabChange(tab.id)}
                      type="button"
                      role="tab"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  key={activeTab}
                  className={`tab-pane fade show active tab-pane-animated tab-pane-${tabDirection}`}
                  role="tabpanel"
                >
                  {tabs.find((tab) => tab.id === activeTab)?.content}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion how-we-work-accordion" id="accordionExample">
                {accordionItems.map((item, index) => {
                  const isOpen = activeAccordion === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`accordion-item process-step ${isOpen ? 'is-open' : ''}`}
                      style={{ '--step-index': index }}
                    >
                      <h2 className="accordion-header" id={`heading${index + 1}`}>
                        <button
                          className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => handleAccordionToggle(item.id)}
                          aria-expanded={isOpen ? 'true' : 'false'}
                          aria-controls={item.id}
                        >
                          <i className={item.icon}></i>
                          <span>{item.title}</span>
                        </button>
                      </h2>
                      {isOpen && (
                        <div
                          id={item.id}
                          className="accordion-collapse process-panel is-open"
                          aria-labelledby={`heading${index + 1}`}
                        >
                          <div className="accordion-body">
                            <p>{item.content}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="features-box">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-content">
                <h3>About TheStudioVS</h3>
                <p>
                  At TheStudioVS, architecture is not treated as a product — it is
                  shaped as an experience. Every project begins with understanding
                  how people live, move, work, and interact with space. Our studio
                  translates these insights into carefully composed environments that
                  feel natural, efficient, and enduring.
                </p>
                <p>
                  We operate as a fully integrated design and build practice,
                  bringing together concept design, technical development,
                  construction execution, turnkey delivery, interior craftsmanship,
                  and structural coordination under one roof.
                </p>
                <p>
                  Our design language is clean, purposeful, and responsive to
                  context — focusing on proportion, material honesty, light,
                  structure, and long-term performance.
                </p>
                <a
                  href="#contact"
                  className="theme-button"
                >
                  <span>Connect With Us</span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="image-holder">
                <img
                  src={images.services.transformationalDesigns}
                  alt="TheStudioVS design and build"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeServices;
