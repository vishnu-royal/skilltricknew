// src/pages/privacy-policy.jsx
import React from "react";

const CookiesPage = () => {
  return (
    <>
     <style>
        {`
          body {
            display: inline !important;
           
          }
           footer{margin-top:10px !important;}
        `}
      </style>
    <div className="about-container extra default-page">
      {/* Banner Section */}
      <div className="inner-banner bg-theme">
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <h1 className="ttl text-white square-box">Cookies </h1>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="container">
      <h1>Cookies Policy</h1>
      <span>Last Updated: [03-March-2025]</span>
      <p>
        This Cookies Policy explains how SkillTricks ("we", "our", or "us") uses
        cookies and similar technologies.
      </p>
      <hr />
      <h3>1. What Are Cookies?</h3>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help us understand how you interact with our site and
        enhance your experience.
      </p>
      <hr />
      <h3>2. Types of Cookies We Use</h3>
      <h5>A. Essential Cookies</h5>
      <p>
        These cookies are necessary for the website to function properly, such
        as navigation and access to secure areas.
      </p>
      <h5>B. Analytics Cookies</h5>
      <p>
        We use these cookies to understand how visitors use our site and improve
        functionality.
      </p>
      <h5>C. Marketing Cookies</h5>
      <p>These cookies are used to track your behavior and display relevant ads.</p>
      <hr />
      <h3>3. Managing Cookies</h3>
      <p>
        You can control or disable cookies through your browser settings.
        However, disabling certain cookies may limit the functionality of the
        website.
      </p>
      <hr />
      <h3>4. Updates to This Policy</h3>
      <p>
        We may revise this Cookies Policy from time to time. Check this page
        periodically for updates.
      </p>
      <hr />
    </div>

      
    </div>

    </>
  );
};

export default CookiesPage;
