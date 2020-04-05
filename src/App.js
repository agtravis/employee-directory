import React from 'react';
import { BrowserRouter as Router /*, Route*/ } from 'react-router-dom';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Container from './components/Container';
import ColumnHeaders from './components/ColumnHeaders';
import './App.css';
import API from './utils/API';
import List from './components/List';
// import Discover from './pages/Discover';
// import About from './pages/About';
// import Search from './pages/Search';
// import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      lastSort: ``,
    };
  }

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search().then((res) => {
      this.setState({ result: res.data.results });
    });
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
      <Router>
        <div>
          <Header />
          <Wrapper>
            <Navbar />
            <Container>
              <ColumnHeaders sortEmployees={this.sortEmployees} />
              <List employees={this.state.result} />
            </Container>
          </Wrapper>
          {/* <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
