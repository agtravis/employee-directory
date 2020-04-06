import React from 'react';
import './style.css';
import DateInput from '../DateInput';
import Button from '../Button';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStyle: {
        width: '20%',
        backgroundColor: 'white',
        paddingLeft: '5px',
      },
    };
  }
  render() {
    return (
      <nav>
        <div className="filters">
          <Button
            whenClicked={this.props.filterEmployees}
            args={[this.props.startDate, this.props.endDate]}
            text={`Find by Date of Birth:`}
          />
          <DateInput
            style={this.state.inputStyle}
            value={this.props.startDate}
            onChange={this.props.handleChange}
            field={`startDate`}
          />
          <DateInput
            style={this.state.inputStyle}
            value={this.props.endDate}
            onChange={this.props.handleChange}
            field={`endDate`}
          />
          <Button
            whenClicked={this.props.findByName}
            args={[this.props.searchText]}
            text={`Search by Name:`}
          />
          <input
            id="name"
            type="text"
            style={this.state.inputStyle}
            placeholder="Enter full or partial name"
            value={this.props.searchText}
            onChange={(event) => this.props.handleChange(event, `search`)}
            onKeyUp={(event) => {
              if (event.key === `Enter`) {
                this.props.findByName(this.props.searchText);
              }
            }}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
