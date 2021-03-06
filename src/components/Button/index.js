import React from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Button(props) {
  return (
    <button
      className="dobSearch"
      onClick={() => props.whenClicked(...props.args)}
    >
      {props.text}
    </button>
  );
}

export default Button;
