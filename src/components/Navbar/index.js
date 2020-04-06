import React from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  const inputStyle = {
    width: '20%',
    backgroundColor: 'white',
    paddingLeft: '5px',
  };

  return (
    <nav>
      <div className="filters">
        <button
          className="dobSearch"
          onClick={() =>
            props.filterEmployees(
              document.getElementById(`start-date`).value,
              document.getElementById(`end-date`).value
            )
          }
        >
          Find by Date of Birth:
        </button>{' '}
        <input
          id="start-date"
          type="date"
          style={inputStyle}
          defaultValue={`1980-04-05`}
        />
        <input
          id="end-date"
          type="date"
          style={inputStyle}
          defaultValue={`1990-04-05`}
        />
        <button
          className="dobSearch"
          onClick={() =>
            props.findByName(document.getElementById(`name`).value)
          }
        >
          Search by Name:
        </button>
        <input
          id="name"
          type="text"
          style={inputStyle}
          placeholder="Enter full or partial name"
          value={props.searchText}
          onChange={(event) => props.handleChange(event)}
          onKeyUp={(event) => {
            if (event.key === `Enter`) {
              props.findByName(document.getElementById(`name`).value);
            }
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
