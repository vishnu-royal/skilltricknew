import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Column 1 */}
        <div className="footer-column">
          <h2>SkillTricks</h2>
          <p className="address">
            2030 Bristol Cir Suite 210, Oakville,
            <br />
            Ontario L6H 6P5, Canada
          </p>
          <a href="mailto:collaborate@skilltricksinc.com" target="_blank" rel="noopener noreferrer">
            collaborate@skilltricksinc.com
          </a>
          <p className="phone">+1 (647) 686-1279</p>
          <a href="https://www.linkedin.com" className="linkedin">
            LinkedIn
          </a>
          <p className="copyright">© SkillTricks Copyrights</p>
        </div>

        {/* Footer Column 2 */}
        <div className="footer-column links">
          <Link to="/about">Who We Are ↗</Link>
          <Link to="/services">What We Do ↗</Link>
          <Link to="/contact">Contact ↗</Link>
        </div>

        {/* Footer Column 3 */}
        <div className="footer-column legal">
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookiespolicy">Cookies</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </div>
          <a href="#top" className="back-to-top" onClick={scrollToTop}>
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
    
    
  );
};

export default Footer;
