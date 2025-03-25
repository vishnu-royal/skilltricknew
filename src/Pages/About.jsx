// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="globe-container"></div>
      <section className="hero-section">
        <div className="round-border-block">
          <span className="round-animtion"></span>
          <h1 className="h1-ttl text-primary text-white mt-0">
            We are growth catalysts specializing in strategic innovation and intelligent solutions
          </h1>
        </div>
      </section>

      <div className="transform-highlight">
        <p className="highlight-text">
          <span className="emphasis">
            We are more than a platform; we are leading a movement to empower leaders and organizations worldwide.
          </span>
        </p>
        <p>
          Whether adapting, growing, optimizing, innovating, or leading, SkillTricks is your partner in success in a
          dynamic business environment.
        </p>
        <a
          href="https://calendly.com/collaborate-skilltricksinc/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button transform"
        >
          <span>Transform With Us</span>
          <canvas className="hover-effect"></canvas>
        </a>
      </div>

      <section className="mission-section" id="mission">
        <div className="mission-links">
          <a href="#mission">Our Mission</a>
          <a href="#what">What We Do</a>
          <a href="#choose">Why Choose Us</a>
        </div>

        <div className="mission-content">
          <p>
            At SkillTricks, we envision a world where organizations continuously evolve and thrive. Our mission is to
            drive meaningful, measurable impact by aligning strategic goals with intelligent solutions, empowering
            leaders to navigate complex challenges with confidence.
          </p>
          <p>
            We believe in the power of combining human expertise with AI-driven insights to create transformative
            strategies. By fostering a culture of continuous improvement and strategic innovation, we help organizations
            not just adapt to change, but lead it.
          </p>
        </div>
      </section>

      <section className="features-section" id="what">
        <div className="services-section bg-theme white-bg-section">
          <div className="gray">
            <div className="container">
              <div className="head-block">
                <h4>
                  SkillTricks delivers innovative AI-powered strategic <br />
                  solutions for organizations seeking transformative <br />
                  growth and sustainable success.
                </h4>
              </div>
              <div className="row gx-0">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <div className="txt">
                    <p>
                      Through StrategyStudio, we provide a platform that offers customized, dialogue-based strategies,
                      helping leaders overcome disruptions, accelerate growth, and build resilient organizations.
                      Designed with versatility in mind, StrategyStudio adapts to your unique needs, making it the ideal
                      partner for long-term success.
                    </p>
                    <div className="btn-block">
                      <a href="/contact" className="btn btn-bordered">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <video autoPlay muted loop playsInline width="100%" height="100%">
            <source src="assets/videos/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="features-section" id="choose">
        <div className="services-section why-choose-section w-100">
          <div className="white">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="ttl-block">
                        <h4 className="ttl">Why Choose Us</h4>
                      </div>
                    </div>
                    <div className="col-lg-6 accordion-tab">
                      <div className="accordion-sec">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                          {/* Accordion 1 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne"
                              >
                                <sup>1.</sup> Innovative Thinking
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="panelsStayOpen-headingOne"
                            >
                              <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet.</p>
                              </div>
                            </div>
                          </div>
                          {/* Accordion 2 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo"
                              >
                                <sup>2.</sup> AI-Driven Insights
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingTwo"
                            >
                              <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet.</p>
                              </div>
                            </div>
                          </div>
                          {/* Accordion 3 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree"
                              >
                                <sup>3.</sup> Long-Term Partnership
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingThree"
                            >
                              <div className="accordion-body">
                                <p>
                                  We’re more than a service; we’re a strategic partner dedicated to your sustained
                                  success.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Accordion */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


     
    </div>
    </>
  );
};

export default About;
