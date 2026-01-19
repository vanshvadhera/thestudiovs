import React, { useEffect, useState, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    website: '',
    comment: ''
  });
  const [message, setMessage] = useState('');
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize Google Maps
    if (window.google && window.$ && window.$.fn.gmap3 && mapRef.current) {
      try {
        const fenway = [37.7940035, -122.2463581];
        const markerPosition = [37.7940035, -122.2463581];
        
        window.$('#map').gmap3({
          center: fenway,
          zoom: 12,
          scrollwheel: false,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP
        }).marker({
          position: markerPosition
        });
      } catch (error) {
        console.log('Map initialization error:', error);
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission (replace with actual API call)
    setMessage('Thank you for your message! We will get back to you soon.');
    
    // Clear form
    setFormData({
      name: '',
      mail: '',
      website: '',
      comment: ''
    });

    // Hide message after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <section className="contact-info-section" id="contact">
      <div className="section-title">
        <span>07</span>
        <h1>Contact</h1>
      </div>

      <div className="container">
        <div className="title-box">
          <span>contact info</span>
          <h2>Get in touch</h2>
        </div>
        <div className="contact-info-box">
          <div className="row g-0">
            <div className="col-lg-4">
              <div className="contact-info-post">
                <i className="fas fa-phone"></i>
                <div className="info-content">
                  <h4>Reception Desk</h4>
                  <p>(+01) 123 456 7899</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-post">
                <i className="fas fa-clock"></i>
                <div className="info-content">
                  <h4>Working Hours</h4>
                  <p>Monday - Friday / 08:00-17:00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-post">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info-content">
                  <h4>Address</h4>
                  <p>Example street nr 23</p>
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
              <div id="map" ref={mapRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
