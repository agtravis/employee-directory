import React from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav>
      <div className="filters">
        <p
          className="dobSearch"
          onClick={() =>
            props.filterEmployees(
              document.getElementById(`start-date`).value,
              document.getElementById(`end-date`).value
            )
          }
        >
          Find by Date of Birth:
        </p>{' '}
        <input
          id="start-date"
          type="date"
          style={{ width: '25%', backgroundColor: 'white' }}
          defaultValue={`1980-04-05`}
        />{' '}
        {` `}{' '}
        <input
          id="end-date"
          type="date"
          style={{ width: '25%', backgroundColor: 'white' }}
          defaultValue={`1990-04-05`}
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

export default Navbar;
