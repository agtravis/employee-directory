import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {props.employees.map((employee) => (
        <li key={employee.login.uuid} className="list-group-item">
          {employee.name.first}
        </li>
      ))}
    </ul>
  );
}

export default List;
