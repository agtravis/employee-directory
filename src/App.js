import React from 'react';
import API from './utils/API';
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Container from './components/Container';
import ColumnHeaders from './components/ColumnHeaders';
import List from './components/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      lastSort: ``,
      search: ``,
      startDate: `1980-01-01`,
      endDate: `1990-01-01`,
    };
  }

  componentDidMount() {
    this.searchEmployees();
  }

  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  searchEmployees = () => {
    API.search().then((res) => {
      this.setState({ result: res.data.results });
    });
  };

  findByName = (searchString) => {
    searchString = searchString.toLowerCase();
    const foundByName = [...this.state.result].filter((employee) => {
      return (
        employee.name.first.toLowerCase().indexOf(searchString) !== -1 ||
        employee.name.last.toLowerCase().indexOf(searchString) !== -1
      );
    });
    this.setState({ result: foundByName });
  };

  filterEmployees = (startDate, endDate) => {
    let start = new Date(startDate);
    let end = new Date(endDate);
    const filteredEmployees = [...this.state.result].filter((employee) => {
      let date = new Date(employee.dob.date);
      return date >= start && date <= end;
    });
    this.setState({ result: filteredEmployees });
  };

  sortEmployees = (propertyToSort) => {
    let sortedEmployees;
    let sortStatus;
    switch (propertyToSort) {
      case `name`:
        if (this.state.lastSort !== propertyToSort) {
          sortedEmployees = this.state.result.sort((a, b) =>
            a.name.last > b.name.last ? 1 : -1
          );
          sortStatus = propertyToSort;
        } else {
          sortedEmployees = this.state.result.sort((a, b) =>
            a.name.last > b.name.last ? -1 : 1
          );
          sortStatus = ``;
        }
        this.setState({ result: sortedEmployees, lastSort: sortStatus });
        break;
      case `dob`:
        if (this.state.lastSort !== propertyToSort) {
          sortedEmployees = this.state.result.sort((a, b) =>
            a.dob.date > b.dob.date ? 1 : -1
          );
          sortStatus = propertyToSort;
        } else {
          sortedEmployees = this.state.result.sort((a, b) =>
            a.dob.date > b.dob.date ? -1 : 1
          );
          sortStatus = ``;
        }
        this.setState({ result: sortedEmployees, lastSort: sortStatus });
        break;
      default:
        console.log(`nothing provided`);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <Navbar
            filterEmployees={this.filterEmployees}
            findByName={this.findByName}
            handleChange={this.handleChange}
            searchText={this.state.search}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
          <Container>
            <ColumnHeaders sortEmployees={this.sortEmployees} />
            <List employees={this.state.result} />
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default App;
