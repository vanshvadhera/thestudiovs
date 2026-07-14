import React, { useState } from 'react';

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56078.36876084634!2d77.36335300000002!3d28.542784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7274a6243cf%3A0x8b2b23439a9fc45e!2sStudioVS-2!5e0!3m2!1sen!2sin!4v1784043971303!5m2!1sen!2sin';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    website: '',
    comment: ''
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('Thank you for your message! We will get back to you soon.');

    setFormData({
      name: '',
      mail: '',
      website: '',
      comment: ''
    });

    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <section className="contact-info-section" id="contact">
      <div className="section-title">
        <span>05</span>
        <h1>Contact</h1>
      </div>

      <div className="container">
        <div className="title-box">
          <span>contact</span>
          <h2>Get in touch</h2>
        </div>
        <div className="contact-info-box">
          <div className="row g-0">
            <div className="col-lg-4">
              <div className="contact-info-post">
                <i className="fas fa-phone"></i>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:9211296162">9211296162</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-post">
                <i className="fas fa-envelope"></i>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@thestudiovs.com">info@thestudiovs.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-post">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>C-109, Sector 100, Noida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-box">
          <div className="row g-0">
            <div className="col-lg-8">
              <form id="contact-form" onSubmit={handleSubmit}>
                <h4>Send message</h4>
                <p style={{ marginBottom: '1.5rem' }}>
                  Connect with us for collaborations, consultations, and project discussions.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-line">
                      <label htmlFor="name">
                        <i className="fas fa-user"></i>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="input-line">
                      <label htmlFor="mail">
                        <i className="fas fa-envelope"></i>
                      </label>
                      <input
                        name="mail"
                        id="mail"
                        type="email"
                        placeholder="E-mail"
                        value={formData.mail}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="input-line">
                      <label htmlFor="website">
                        <i className="fas fa-link"></i>
                      </label>
                      <input
                        name="website"
                        id="website"
                        type="text"
                        placeholder="Website"
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-line">
                      <textarea
                        name="comment"
                        id="comment"
                        placeholder="Message"
                        value={formData.comment}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" id="submit_contact">
                      Send message
                    </button>
                  </div>
                </div>
                {message && (
                  <div id="msg" className="alert alert-success">
                    {message}
                  </div>
                )}
              </form>
            </div>
            <div className="col-lg-4">
              <div id="map" className="contact-map">
                <iframe
                  title="TheStudioVS location - StudioVS-2"
                  src={MAP_EMBED_SRC}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
