import React from 'react';

const Contact = () => {
    
  return (
    <>
    <style>
        {`
          body {
            display: inline !important;
           
          }
        `}
      </style>
    <div className="about-container contact">
      {/* Contact Section */}
      <section className="contact-container">
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-text">
              <h2>Interested in working with us?</h2>
              <p className="description">
                Whether you're looking to explore our solutions or ready to take your organization to new heights, we're here to help.
                Schedule a free strategy session to discuss how StrategyStudio can drive results for you.
              </p>
            </div>
            <div className="contact-address">
              <h3>SkillTricks</h3>
              <p>792 W 8th Street,<br /> Minot 82884, Canada</p>
              <p>
                <a href="mailto:contact@skilltricks.com" className="text-white">contact@skilltricks.com</a>
              </p>
              <p>
                <a href="tel:(631) 651-8811" className="text-white">(631) 651-8811</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>CONTACT FORM</h3>
            <form>
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" required />
                <label>Full Name <span className="required">*</span></label>
              </div>
              <div className="form-group">
                <input type="text" name="company" placeholder="Company Name" required />
                <label>Company Name <span className="required">*</span></label>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" required />
                <label>Email <span className="required">*</span></label>
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required />
                <label>Phone Number <span className="required">*</span></label>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" required></textarea>
                <label>Message <span className="required">*</span></label>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy">You agree to our friendly <a href="/privacy-policy">Privacy Policy</a></label>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.955213660632!2d-79.70818392346129!3d43.37413517111767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5c86e45208a9%3A0x4cb15892cd1434!2s2030%20Bristol%20Cir%20%23210%2C%20Oakville%2C%20ON%20L6H%206P5%2C%20Canada!5e0!3m2!1sen!2sin!4v1708701743744!5m2!1sen!2sin"
          width="1100"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SkillTricks Map"
        />
      </div>

      {/* Chatbot Section */}
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h3>SkillTricks Assistant</h3>
          <div className="header-buttons">
            <button className="restart-chat">
              <i className="fas fa-redo"></i>
            </button>
            <button className="close-chat">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className="chat-messages">
          <div className="option-buttons"></div>
        </div>

        <div className="typing-indicator" style={{ display: 'none' }}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="user-input">
          <div className="input-container">
            <input type="text" placeholder="Type your message..." disabled />
            <button className="send-message" disabled>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <button className="chatbot-toggle">
        <i className="fas fa-comments"></i>
      </button>

    
    </div>

    </>
  );
};

export default Contact;
