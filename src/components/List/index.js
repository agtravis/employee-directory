import React, { useContext } from 'react';
import './style.css';
import EmployeeContext from '../../context/EmployeeContext';

function List() {
  const { employees } = useContext(EmployeeContext);
  // const propsEmployees = [...props.employees];
  // propsEmployees.unshift(...employees);
  return (
    <ul className="list-group">
      {employees.map((employee) => (
        <li key={employee.login.uuid} className="list-group-item">
          <div className="pic">
            <img
              src={employee.picture.thumbnail}
              alt={`${employee.name.first} ${employee.name.last}`}
              title={`${employee.name.first} ${employee.name.last}`}
            />
          </div>
          <div className="info">
            <p>{`${employee.name.first} ${employee.name.last}`}</p>
          </div>
          <div className="info">
            <p>{employee.cell}</p>
          </div>
          <div className="email">
            <p>{employee.email}</p>
          </div>
          <div className="info">
            <p>{new Date(employee.dob.date).toLocaleDateString()}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
