import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaDribbbleSquare, FaBehanceSquare, FaTwitterSquare } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon" />,
    url: 'https://www.twitter.com'
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://www.twitter.com'
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon" />,
    url: 'https://www.twitter.com'
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon" />,
    url: 'https://www.twitter.com'
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon" />,
    url: 'https://www.twitter.com'
  }
];
const links = data.map((link) => (
  <li key={link.id}>
    <a href={link.url} className="social-link">
      {link.icon}
    </a>
  </li>
));

export default ({ styleClass }) => <ul className={`social-links ${styleClass || ''}`}>{links}</ul>;
