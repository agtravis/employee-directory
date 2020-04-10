import React, { useContext } from 'react';
import './style.css';
import DateInput from '../DateInput';
import Button from '../Button';
import EmployeeContext from '../../context/EmployeeContext';

function Navbar(props) {
  const { search, dates } = useContext(EmployeeContext);
  const inputStyle = {
    width: '20%',
    backgroundColor: 'white',
    paddingLeft: '5px',
  };

  return (
    <nav>
      <div className="filters">
        <Button
          whenClicked={props.filterEmployees}
          args={[dates.startDate, dates.endDate]}
          text={`Find by Date of Birth:`}
        />
        <DateInput
          style={inputStyle}
          value={dates.startDate}
          onChange={props.handleChange}
          field={`startDate`}
        />
        <DateInput
          style={inputStyle}
          value={dates.endDate}
          onChange={props.handleChange}
          field={`endDate`}
        />
        <Button
          whenClicked={props.findByName}
          args={[search]}
          text={`Search by Name:`}
        />
        <input
          id="name"
          type="text"
          style={inputStyle}
          placeholder="Enter full or partial name"
          value={search}
          onChange={(event) => props.handleChange(event, `search`)}
          onKeyUp={(event) => {
            if (event.key === `Enter`) {
              props.findByName(search);
            }
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
