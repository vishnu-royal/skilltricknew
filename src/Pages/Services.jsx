import React from "react";
import ServicesSection from "../Components/ServicesSection";
import Journey from "../Components/Journey";

const Services = () => {
  return (
    <div className="about-container services">
      {/* Hero Section */}
      <section className="heros-section">
        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src="assets/images/video.qt" type="video/mp4" />
          </video>
        </div>
        <div className="round-border-block services-border">
          <span className="round-animtion"></span>
          <h1 className="h1-ttl">
            We Architect Strategic Solutions that Shape Tomorrow's Success
          </h1>
        </div>
      </section>

      {/* Core Services Section */}
      {/* <section className="parallax-services services SERVICES2" id="parallax">
        <div className="services-content">
          <h3 className="service-heading">OUR CORE SERVICES</h3>
          <h2 className="service-title">
            Strategic Excellence Delivered Through <br /> Custom Solutions and
            Measurable Impact
          </h2>

          <div className="services-cards">
            <div className="service-card unfocused">
              <img
                src="assets/images/Redirect2.png"
                alt=""
                className="card-redirect"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              />
              <h3 className="card-heading">StrategyStudio Implementation</h3>
              <div className="img-wrap">
                <img src="assets/images/service-img-1.svg" alt="" />
              </div>
              <p className="card-content">
                Our primary offering, StrategyStudio, equips businesses with a
                structured, AI-powered tool to analyze, strategize, and
                implement impactful changes.
              </p>
            </div>

            <div className="service-card unfocused">
              <img
                src="assets/images/Redirect2.png"
                alt=""
                className="card-redirect"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              />
              <h3 className="card-heading">Leadership Coaching</h3>
              <div className="img-wrap">
                <img src="assets/images/service-img-2.svg" alt="" />
              </div>
              <p className="card-content">
                Tailored coaching sessions that help leaders develop critical
                thinking, resilience, and adaptability.
              </p>
            </div>

            <div className="service-card focused">
              <img
                src="assets/images/Redirect.png"
                alt=""
                className="card-redirect"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              />
              <h3 className="card-heading">
                Organizational Development & Culture Transformation
              </h3>
              <div className="img-wrap">
                <img src="assets/images/service-img-3.svg" alt="" />
              </div>
              <p className="card-content">
                Drive cultural transformation with strategies designed to boost
                engagement, align values, and foster a positive, productive
                environment.
              </p>
            </div>
          </div>

          <a
            href="https://calendly.com/collaborate-skilltricksinc/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta"
          >
            Get Started with a Free Strategy Session
          </a>

          <div className="cards-navigation mt_5 d-flex align-items-center">
            <button className="nav-arrow prev">
              <img src="assets/images/ArrowLeft.png" alt="Previous" />
            </button>
            <button className="nav-arrow next">
              <img src="assets/images/ArrowRight.png" alt="Next" />
            </button>
          </div>
        </div>
      </section> */}
<ServicesSection />
      <div className="testimonials-section">
        <div className="progress-journey-section">
          <div className="container">
            <div className="row">
              {/* Core Competencies Section */}
              <div className="col-md-4">
                <div className="progress-bock">
                  <h3 className="ttl">Core Competencies</h3>
                  {[
                    {
                      img: "assets/images/artificial-intelligence.svg",
                      title: "Strategic Innovation",
                      value: "90%",
                    },
                    {
                      img: "assets/images/competencie2.png",
                      title: "Talent Engagement",
                      value: "85%",
                    },
                    {
                      img: "assets/images/success.png",
                      title: "Growth & Performance",
                      value: "92%",
                    },
                    {
                      img: "assets/images/premium.png",
                      title: "Leadership Mastery",
                      value: "88%",
                    },
                    {
                      img: "assets/images/internet-of-things.png",
                      title: "Digital Transformation",
                      value: "87%",
                    },
                  ].map((item, index) => (
                    <div className="progress-div" key={index}>
                      <h6>
                        <img src={item.img} alt="" /> {item.title}{" "}
                        <span>{item.value}</span>
                      </h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: item.value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Metrics Section */}
              <div className="col-md-4">
                <div className="progress-bock operational-sec">
                  <h3 className="ttl">Operational Metrics</h3>
                  <div className="d-flex align-items-center flex-column position-relative">
                    <div className="img-wrap">
                      <img
                        className="img-fluid"
                        src="assets/images/round-img.png"
                        alt=""
                      />
                    </div>
                    <div className="body text-center">
                      <h3 className="ttl-block">45%</h3>
                      <h4 className="txt">increase in productivity metrics</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry Impact Section */}
              <div className="col-md-4">
                <div className="progress-bock impact">
                  <h3 className="ttl">Industry Impact</h3>
                  <div className="d-flex flex-column align-items-center">
                    <h2 className="fw-bold">200+</h2>
                    <p>
                      Successful implementations resulting in improved leadership
                      resilience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 text-center">
                <div className="btn-block">
                  <a href="#Journey" className="btn btn-bordered custom-btn-theme">
                    Start Your Journey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


<Journey/>
  
      
    </div>

    
  );
};

export default Services;
