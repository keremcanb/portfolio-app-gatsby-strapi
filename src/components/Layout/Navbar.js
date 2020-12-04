/* eslint-disable react/button-has-type */
import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import PageLinks from '../../constants/links';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        {/* <img src={logo} alt="logo" /> */}

        <button className="toggle-btn">
          <FaAlignRight />
        </button>
      </div>

      <PageLinks styleClass="nav-links" />
    </div>
  </nav>
);

export default Navbar;
