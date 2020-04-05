import React from 'react';
import './style.css';

function ColumnHeaders() {
  return (
    <div className="column-headers">
      <div className="image">
        <p></p>
      </div>
      <div className="info">
        <p>Name</p>
      </div>
      <div className="info">
        <p>Phone</p>
      </div>
      <div className="email">
        <p>Email</p>
      </div>
      <div className="info">
        <p>DOB</p>
      </div>
    </div>
  );
}

export default ColumnHeaders;
