import React, { useState } from 'react';

const ServicesSection = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: 'StrategyStudio Implementation',
      content: 'Our primary offering, StrategyStudio, equips businesses with a structured, AI-powered tool to analyze, strategize, and implement impactful changes. Through a seamless onboarding process, we ensure that you get the most out of your investment.',
      img: 'assets/images/Redirect2.png'
    },
    {
      title: 'Leadership Coaching',
      content: 'Tailored coaching sessions that help leaders develop critical thinking, resilience, and adaptability—key skills for guiding teams through change.',
      img: 'assets/images/Redirect2.png'
    },
    {
      title: 'Organizational Development & Culture Transformation',
      content: 'Drive cultural transformation with strategies designed to boost engagement, align values, and foster a positive, productive environment.',
      img: 'assets/images/Redirect.png'
    }
  ];

  const handleShow = (newContent) => {
    setContent(newContent);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <>
      <section className="parallax-services services SERVICES2" id="parallax">
        <div className="services-content">
          <h3 className="service-heading">OUR CORE SERVICES</h3>
          <h2 className="service-title">
            Strategic Excellence Delivered Through <br /> Custom Solutions and Measurable Impact
          </h2>

          <div className="services-cards">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${index === activeIndex ? 'focused' : 'unfocused'}`}
                onClick={() => handleShow(service.content)}
              >
                
                <h3 className="card-heading">{service.title}</h3>
                {/* Image Wrap Section */}
                <div className="img-wrap">
                <img src="assets/images/service-img-1.svg" alt="" aria-hidden="true" />
                </div>

                <img src={service.img} alt="" className="card-redirect" />
                <p className="card-content">{service.content}</p>
              </div>
            ))}
          </div>

          <a href="https://calendly.com/collaborate-skilltricksinc/30min" target="_blank" rel="noreferrer" className="services-cta">
            Get Started with a Free Strategy Session
          </a>

          {/* Navigation Arrows */}
          <div className="cards-navigation mt-5">
            <div className="inline-btn d-flex align-items-center">
              <button className="nav-arrow prev" onClick={handlePrev}>
                <img src="assets/images/ArrowLeft.png" alt="Previous" />
              </button>
              <button className="nav-arrow next" onClick={handleNext}>
                <img src="assets/images/ArrowRight.png" alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Offcanvas Component */}
      <div className={`offcanvas offcanvas-end ${show ? 'show' : ''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ visibility: show ? 'visible' : 'hidden' }}>
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Service Details</h5>
          <button type="button" className="btn-close text-reset" onClick={handleClose} aria-label="Close">&times;</button>
        </div>
        <div className="offcanvas-body">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;