// src/pages/About.jsx
import React from 'react';
import ParticleGlobe from "../Pages/ParticleGlobe";
import ServicesSection from "../Components/ServicesSection";

const Home = () => {
    // const [show, setShow] = useState(false);
    // const [content, setContent] = useState('');
  
    // const handleShow = (newContent) => {
    //   setContent(newContent);
    //   setShow(true);
    // };
  
    // const handleClose = () => setShow(false);
  
  return (
    <>
    <div id="body">
    <div className="about-container">
      <div className="globe-container">
      <ParticleGlobe />
      </div>
      <section className="hero-section home">
        <div className="round-border-block">
          <span className="round-animtion"></span>
          <h1 className="h1-ttl text-primary text-white mt-0">
          Transform Your Organization’s Future with StrategyStudio
          </h1>
        </div>
      </section>

      <section className="hero-section home">
        <div className="round-border-block">
          <span className="round-animtion"></span>
          <div className="d-flex flex-column">
            <h2 className="h2-ttl text-white">
                Harnessing the power of AI to transform leadership and
                organizational culture
              </h2>
              <div className="btn-block text-center">
                <a
                  href="https://calendly.com/collaborate-skilltricksinc/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                  
                >
                  <span>Get Started with a Free Strategy Session</span>
                  <canvas className="hover-effect"></canvas>
                </a>
              </div>
          </div>
        </div>
      </section>

      <div className="hero-section home">
        <div className="section-header">
          <h2 className="section-title text-left">
            Empowering Organizations through Unified Insights
          </h2>
          <p className="section-description">
            SkillTricks empowers organizations to reach their full potential
            through strategic innovation and intelligent insights.
          </p>
        </div>

        <div className="cards-container">
          {[
            {
              img: "assets/images/AI.png",
              title: "Strategic Innovation",
              desc: "AI-driven strategies to meet evolving business needs.",
            },
            {
              img: "assets/images/Nodes.png",
              title: "Talent Engagement",
              desc: "Enhance workforce engagement with customized frameworks.",
            },
            {
              img: "assets/images/Graph.png",
              title: "Sustainable Growth",
              desc: "Ensure long-term success with adaptable solutions.",
            },
          ].map((item, index) => (
            <div key={index} className="feature-card">
              <img src={item.img} alt={item.title} className="card-icon" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="https://calendly.com/collaborate-skilltricksinc/30min"
          target="_blank"
          rel="noreferrer"
          className="section-cta"
        >
          <span>Schedule a Call</span>
          <canvas className="hover-effect"></canvas>
        </a>
      </div>

      {/* <section class="parallax-services services SERVICES2" id="parallax">
            <div class="services-content">
                <h3 class="service-heading">OUR CORE SERVICES</h3>
                <h2 class="service-title">Strategic Excellence Delivered Through <br></br> Custom Solutions and Measurable Impact</h2>

                <div class="services-cards">
                    <div class="service-card unfocused">
                        <img src="assets/images/Redirect2.png" alt="" id="redirect" class="card-redirect" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"/>
                        <h3 class="card-heading">StrategyStudio Implementation</h3>
                        <div class="img-wrap">
                            <div class="img-wrap">
                                
                                
                            </div>
                        </div>
                        <p class="card-content">Our primary offering, StrategyStudio, equips businesses with a structured, AI-powered tool to analyze, strategize, and implement impactful changes. Through a seamless onboarding process, we ensure that you get the most out of your investment.</p>
                    </div>
                    
                    <div class="service-card unfocused">
                        <img src="assets/images/Redirect2.png" alt="" class="card-redirect" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"/>
                        <h3 class="card-heading">Leadership Coaching</h3>
                        <div class="img-wrap" id="">
                            
                        </div>
                        <p class="card-content">Tailored coaching sessions that help leaders develop critical thinking, resilience, and adaptability—key skills for guiding teams through change.</p>
                    </div>
                    
                    <div class="service-card focused">
                        <img src="assets/images/Redirect.png" alt="" class="card-redirect" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"/>
                        <h3 class="card-heading">Organizational Development & Culture Transformation</h3>
                        <div class="img-wrap" id="">
                            
                        </div>
                        <p class="card-content">Drive cultural transformation with strategies designed to boost engagement, align values, and foster a positive, productive environment.</p>
                    </div>
                </div>           
                <a href="https://calendly.com/collaborate-skilltricksinc/30min" target="_blank" rel="noreferrer" class="services-cta">Get Started with a Free Strategy Session</a>
                <div class="cards-navigation mt_5">
                    
    &nbsp; &nbsp;
                    <div class="inline-btn d-flex align-items-center">
                        <button class="nav-arrow prev">
                            <img src="assets/images/ArrowLeft.png" alt="Previous"/>
                        </button>
                        <button class="nav-arrow next">
                            <img src="assets/images/ArrowRight.png" alt="Next"/>
                        </button>
                    </div>
                </div>
                
            </div>
        </section> */}

     <ServicesSection />
    </div>
    </div>
    </>
  );
};

export default Home;
