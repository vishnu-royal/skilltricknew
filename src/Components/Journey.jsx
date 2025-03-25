import { useEffect, useState } from "react";

const steps = [
  { number: "01", title: "Discovery", description: "We begin by understanding your business landscape, goals, and key challenges." },
  { number: "02", title: "Strategic Analysis", description: "Using AI-driven insights, we analyze your organization’s strengths and industry trends." },
  { number: "03", title: "Strategy Development", description: "Our experts craft a roadmap with customized solutions for impactful outcomes." },
  { number: "04", title: "Implementation & Realization", description: "We support you in rolling out strategies across your organization for optimized success." },
  { number: "05", title: "Evaluation & Evolution", description: "We continue to evaluate outcomes, offer insights, and fine-tune strategies." }
];

const Journey = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".step");
      let currentStep = 1;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentStep = index + 1;
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="journey-section" id="Journey">
      <div className="journey-content">
        <div className="journey-left">
          <h2>Your Journey to Success</h2>
          <ul className="steps">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`step ${activeStep === index + 1 ? "active" : ""}`}
                data-step={index + 1}
              >
                <span className="number">{step.number}</span>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  {index < steps.length - 1 && <div className="connector"></div>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="journey-right">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`step-description ${activeStep === index + 1 ? "active" : ""}`}
            >
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;