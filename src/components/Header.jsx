import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header(){
  return (
    <header>
      <div className="NavBar">
        <ul>
          <li id="WebsiteName">Kart Of Joe</li>
          <li>
            <Link to={'/Home'} className="header-link">Home</Link>
          </li>
          <li>
            <Link to={'/Gallery'} className="header-link">Gallery</Link>
          </li>
          <li>
            <Link to={'/SignIn'} className="header-link">Sign In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
