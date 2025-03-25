import React from "react";

const TermsOfUse = () => {
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
            <h1 className="ttl text-white square-box">Terms of Use</h1>
          </div>
        </div>
      </div>

      <div className="container">
      <h1>Terms of Use</h1>
      <span>Last Updated: [03-March-2025]</span>
      <p>
        Welcome to SkillTricks! By accessing or using our website, you agree to
        comply with these Terms of Use.
      </p>
      <hr />
      <h3>1. Use of the Website</h3>
      <p>You agree to:</p>
      <ul>
        <li>Use the website only for lawful purposes.</li>
        <li>Refrain from engaging in harmful activities, such as hacking or spreading malware.</li>
      </ul>
      <hr />
      <h3>2. Intellectual Property</h3>
      <p>
        All content on this website, including text, images, and logos, is the
        property of SkillTricks. Unauthorized use is prohibited.
      </p>
      <hr />
      <h3>3. User Submissions</h3>
      <p>
        By submitting information (e.g., via our contact form), you grant us
        permission to use this data for business purposes in accordance with our
        Privacy Policy.
      </p>
      <hr />
      <h3>4. Limitation of Liability</h3>
      <p>SkillTricks is not liable for damages resulting from the use of this website, including:</p>
      <ul>
        <li>Loss of data</li>
        <li>Service interruptions</li>
        <li>Unauthorized access</li>
      </ul>
      <hr />
      <h3>5. Governing Law</h3>
      <p>These Terms are governed by the laws of Canada.</p>
      <hr />
      <h3>6. Contact Us</h3>
      <p>
        If you have questions about these Terms, contact us at{" "}
        <a href="mailto:contact@skilltricks.com" target="_blank" rel="noopener noreferrer">
          contact@skilltricks.com
        </a>
        .
      </p>
      <hr />
    </div>

      
    </div>

    </>
  );
};

export default TermsOfUse;
