import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
// import Discover from './pages/Discover';
// import About from './pages/About';
// import Search from './pages/Search';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Header />
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

export default App;
