import React from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="filters">
          <p>Date of Birth:</p>{' '}
          <input
            type="date"
            style={{ width: '25%', backgroundColor: 'white' }}
          />{' '}
          {` `}{' '}
          <input
            type="date"
            style={{ width: '25%', backgroundColor: 'white' }}
          />
          <input
            type="text"
            style={{ width: '25%', backgroundColor: 'white' }}
            placeholder="Search by name..."
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
