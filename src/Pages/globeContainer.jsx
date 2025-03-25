import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
// import ParticleGlobe from "./ParticleGlobe";
import ParticleGlobe from "../Pages/ParticleGlobe";



gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // const lenisRef = useRef(null);
  const buttonRef = useRef(null);
  const canvasRef = useRef(null);
  const [radius, setRadius] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      console.log(sectionRect);
    }
  }, []);
  // 🎨 Button Hover Effect
  useEffect(() => {
    const button = buttonRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const rect = button.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const handleMouseEnter = (e) => {
      const rect = button.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      gsap.to(setRadius, {
        duration: 1,
        ease: "power2.out",
        onUpdate: () => setRadius(Math.max(rect.width, rect.height) * 1.5),
      });
    };

    const handleMouseLeave = () => {
      gsap.to(setRadius, {
        duration: 0.6,
        ease: "power2.out",
        onUpdate: () => setRadius(0),
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (radius > 0) {
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [radius, mouse]);

  // 🌍 Globe Creation
  useEffect(() => {
    class Globe {
      constructor(container) {
        this.container = container;
        this.scene = new window.THREE.Scene();
        this.camera = new window.THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        this.renderer = new window.THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
        this.init();
      }

      init() {
        this.createGlobe();
        this.camera.position.z = 5;
        window.addEventListener("resize", this.onWindowResize.bind(this));
        this.animate();
      }

      createGlobe() {
        const geometry = new window.THREE.SphereGeometry(2, 64, 64);
        const textureLoader = new window.THREE.TextureLoader();
        const texture = textureLoader.load(
          "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
        );
        const material = new window.THREE.MeshStandardMaterial({ map: texture });
        this.globe = new window.THREE.Mesh(geometry, material);
        this.scene.add(this.globe);

        const light = new window.THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 3, 5).normalize();
        this.scene.add(light);
      }

      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      }

      animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.globe.rotation.y += 0.002;
        this.renderer.render(this.scene, this.camera);
      }
    }

    const globeContainer = document.querySelector(".globe-container");
    if (globeContainer) {
      new Globe(globeContainer);
    }
  }, []);

  // 🎥 Smooth Scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       wheelMultiplier: 1,
//       touchMultiplier: 2,
//     });

//     lenisRef.current = lenis;

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);
//   const lenis = new Lenis({
//     duration: 1.5, // Smooth duration
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
//     smooth: true, // Enable smooth scroll
//     smoothTouch: false // Disable on touch devices (optional)
// });

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

const LenisScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,            // Scroll duration
      smooth: true,             // Enable smooth scrolling
      smoothTouch: false,       // Optional: Enable/Disable on touch devices
      easing: (t) => 1 - Math.pow(1 - t, 3) // Custom easing function
    });

    // Animation loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div>{children}</div>;
};

  return (
    <>

    <style>
       {`
          body {
            display: inline !important;
           
          }
            footer{
              margin-top: 800px !important;
            }
        `}
    </style>
      <div id="body">
          {/* 🌍 Globe Section */}
          <div className="globe-container"></div>
          <ParticleGlobe />

          {/* 📚 Content Section */}
          <LenisScroll>
            <div>
      <div className="content-container">
        {/* 🔥 Section 1 */}
        <div className="text-section" id="section1">
          <div className="round-border-block">
            <span className="round-animation"></span>
            <h1 className="h1-ttl text-primary text-white">
              Transform Your Organization’s Future with StrategyStudio
            </h1>
          </div>
        </div>

        {/* 🔥 Section 2 */}
        <div className="text-section" id="section2" >
          <div className="round-border-block">
            <span className="round-animation"></span>
            <div className="d-flex flex-column">
              <h2 className="h2-ttl text-primary text-white">
                Harnessing the power of AI to transform leadership and
                organizational culture
              </h2>
              <div className="btn-block text-center">
                <a
                  href="https://calendly.com/collaborate-skilltricksinc/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                  ref={buttonRef}
                >
                  <span>Get Started with a Free Strategy Session</span>
                  <canvas ref={canvasRef} className="hover-effect"></canvas>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 Section 3 */}
        <div className="text-section" id="section3" >
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

        {/* 🔥 Scroll Indicator */}
        <div className="scroll-container">
          <img
            src="assets/images/ChevronDown.png"
            alt="Scroll"
            className="scroll-icon"
          />
          <p className="scroll-text">Keep Scrolling</p>
        </div>

        {/* 🛠️ Chatbot Button */}
        <button className="chatbot-toggle">
          <i className="fas fa-comments"></i>
        </button>

        {/* 🛠️ Services Section */}
        <section className="parallax-services SERVICES1" id="parallax">
          <div className="services-content">
            <h3 className="service-heading">OUR CORE SERVICES</h3>
            <h2 className="service-title">
              Strategic Excellence Delivered Through <br /> Custom Solutions and
              Measurable Impact
            </h2>

            <div className="services-cards">
              {[
                {
                  title: "StrategyStudio Implementation",
                  desc: "AI-powered tool to analyze, strategize, and implement changes.",
                },
                {
                  title: "Leadership Coaching",
                  desc: "Tailored sessions to develop critical thinking and adaptability.",
                },
              ].map((item, index) => (
                <div key={index} className="service-card unfocused">
                  <img
                    src="assets/images/Redirect2.png"
                    alt="Redirect"
                    className="card-redirect"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  />
                  <h3 className="card-heading">{item.title}</h3>
                  <p className="card-content">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="https://calendly.com/collaborate-skilltricksinc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="services-cta"
            >
              Get Started with a Free Strategy Session
            </a>
          </div>
        </section>
      </div>
    </div>
          </LenisScroll>
         
      </div>
    </>
  );
};

export default Home;
