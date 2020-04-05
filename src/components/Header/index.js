import React from 'react';
import './style.css';
import logo from '../../assets/images/logo.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div id="company-name" className="col s12 m12 l12">
            <h1>Employee Directory</h1>
            <img
              src={logo}
              alt="logo"
              style={{ width: '25%', height: '25%' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
