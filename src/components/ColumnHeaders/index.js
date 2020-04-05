import React from 'react';
import './style.css';

function ColumnHeaders(props) {
  return (
    <div className="column-headers">
      <div className="image">
        <p></p>
      </div>
      <div className="info">
        <p className="sortable" onClick={() => props.sortEmployees(`name`)}>
          Name<i className="tiny material-icons">arrow_drop_down</i>
        </p>
      </div>
      <div className="info">
        <p>Phone</p>
      </div>
      <div className="email">
        <p>Email</p>
      </div>
      <div className="info">
        <p className="sortable" onClick={() => props.sortEmployees(`dob`)}>
          DOB<i className="tiny material-icons">arrow_drop_down</i>
        </p>
      </div>
    </div>
  );
}

export default ColumnHeaders;
