import React from 'react';
import SocialLinks from '../../constants/socialLinks';

const Footer = () => (
  <footer className="footer">
    <div>
      {/* <SocialLinks styleClass="footer-links" /> */}

      <h4>
        Copyright &copy; {new Date().getFullYear()} <span>Keremcan Büyüktaşkın</span> All Rights Reserved
      </h4>
    </div>
  </footer>
);

export default Footer;
