import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AlternativeServices = () => {
  const [activeTab, setActiveTab] = useState('choose');
  const [activeAccordion, setActiveAccordion] = useState('collapseOne');
  const accordionRef = useRef(null);

  const tabs = [
    {
      id: 'choose',
      label: 'why choose us',
      content: (
        <div className="row">
          <div className="col-lg-4">
            <img
              src="/templates.fabric-lab.co/archios/upload/architecture/tab1.jpg"
              alt="tab1"
            />
          </div>
          <div className="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'mission',
      label: 'our mission',
      content: (
        <div className="row">
          <div className="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="/templates.fabric-lab.co/archios/upload/architecture/tab1.jpg"
              alt="tab1"
            />
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      label: 'our vision',
      content: (
        <div className="row">
          <div className="col-lg-4">
            <img
              src="/templates.fabric-lab.co/archios/upload/architecture/tab1.jpg"
              alt="tab1"
            />
          </div>
          <div className="col-lg-8">
            <p>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit
            </p>
          </div>
        </div>
      )
    }
  ];

  const accordionItems = [
    {
      id: 'collapseOne',
      icon: 'fas fa-warehouse',
      title: 'For the trust, you have on us',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
    },
    {
      id: 'collapseTwo',
      icon: 'fab fa-houzz',
      title: 'Modern designs served with quality',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
    },
    {
      id: 'collapseThree',
      icon: 'fas fa-user-secret',
      title: 'Designs too original to be copied',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
    }
  ];

  useEffect(() => {
    // Initialize Bootstrap collapse for smooth animations
    const initBootstrapCollapse = () => {
      if (accordionRef.current) {
        const collapseElements = accordionRef.current.querySelectorAll('.accordion-collapse');
        
        // Try Bootstrap 4 API (jQuery-based) - prioritize this as template likely uses Bootstrap 4
        if (window.$ && window.$.fn.collapse) {
          collapseElements.forEach((element) => {
            const $el = window.$(element);
            if (!$el.data('bs.collapse')) {
              $el.collapse({
                toggle: false
              });
            }
          });
        }
        // Try Bootstrap 5 API (fallback)
        else if (window.bootstrap && window.bootstrap.Collapse) {
          collapseElements.forEach((element) => {
            if (!element._collapse) {
              try {
                new window.bootstrap.Collapse(element, {
                  toggle: false
                });
              } catch (e) {
                // Fallback to manual animation
              }
            }
          });
        }
      }
    };

    // Try immediately
    initBootstrapCollapse();

    // Retry if Bootstrap loads later
    let attempts = 0;
    const maxAttempts = 20;
    const interval = setInterval(() => {
      attempts++;
      if (window.bootstrap || window.$) {
        initBootstrapCollapse();
        clearInterval(interval);
      }
      if (attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleAccordionToggle = (itemId) => {
    if (activeAccordion === itemId) {
      // Close if already open
      setActiveAccordion('');
      if (window.$ && window.$.fn.collapse) {
        const $element = window.$(`#${itemId}`);
        $element.collapse('hide');
      } else if (window.bootstrap && window.bootstrap.Collapse) {
        const element = document.getElementById(itemId);
        if (element && element._collapse) {
          element._collapse.hide();
        }
      }
    } else {
      // Close previous one and open new one
      if (activeAccordion) {
        if (window.$ && window.$.fn.collapse) {
          window.$(`#${activeAccordion}`).collapse('hide');
        } else if (window.bootstrap && window.bootstrap.Collapse) {
          const prevElement = document.getElementById(activeAccordion);
          if (prevElement && prevElement._collapse) {
            prevElement._collapse.hide();
          }
        }
      }
      
      setActiveAccordion(itemId);
      
      // Use setTimeout to ensure state update happens before Bootstrap animation
      setTimeout(() => {
        if (window.$ && window.$.fn.collapse) {
          const $element = window.$(`#${itemId}`);
          $element.collapse('show');
        } else if (window.bootstrap && window.bootstrap.Collapse) {
          const element = document.getElementById(itemId);
          if (element) {
            if (!element._collapse) {
              try {
                new window.bootstrap.Collapse(element, {
                  toggle: false
                });
              } catch (e) {
                // Fallback
              }
            }
            if (element._collapse) {
              element._collapse.show();
            }
          }
        }
      }, 10);
    }
  };

  return (
    <section className="tabs-collapse-section" id="services2">
      <div className="section-title">
        <span>04</span>
        <h1>Alternative Service</h1>
      </div>

      <div className="container">
        <div className="title-box">
          <span>more services</span>
          <h2>Other Services</h2>
        </div>
        <div className="tabs-collapse">
          <div className="row">
            <div className="col-lg-6">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tabs.map((tab) => (
                  <li key={tab.id} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                      role="tab"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="myTabContent">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                    role="tabpanel"
                  >
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="accordionExample" ref={accordionRef}>
                {accordionItems.map((item, index) => (
                  <div key={item.id} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index + 1}`}>
                      <button
                        className={`accordion-button ${activeAccordion === item.id ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => handleAccordionToggle(item.id)}
                        aria-expanded={activeAccordion === item.id ? 'true' : 'false'}
                        aria-controls={item.id}
                      >
                        <i className={item.icon}></i>
                        <span>{item.title}</span>
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse ${activeAccordion === item.id ? 'show' : ''}`}
                      aria-labelledby={`heading${index + 1}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="features-box">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-content">
                <h3>Premium Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <Link
                  to="/portfolio"
                  className="theme-button"
                >
                  <span>Projects</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="image-holder">
                <img
                  src="/templates.fabric-lab.co/archios/upload/architecture/transformational_designs.png"
                  alt="transformational_designs"
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
