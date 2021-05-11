import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h5>Questions? Call 0-800-800-1301</h5>
      <div className="footer-sections">
        <p>FAQ</p>
        <p>Help Center</p>
        <p>Account</p>
        <p>Media Center</p>
      </div>
      <div className="footer-sections">
        <p>Investor Relations</p>
        <p>Jobs</p>
        <p>Ways to Watch</p>
        <p>Terms of Use</p>
      </div>
      <div className="footer-sections">
        <p>Privacy</p>
        <p>Cookie Preferences</p>
        <p>Corporate Information</p>
        <p>Contact Us</p>
      </div>
      <div className="footer-sections">
        <p>Speed Test</p>
        <p>Legal Notices</p>
        <p>Netflix Originals</p>
      </div>
      <span>Netflix Argentina</span>
    </footer>
  );
}

export default Footer;
