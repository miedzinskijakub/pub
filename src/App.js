import React, { Component } from 'react';
import './App.css';
import Home from './components/pages/Index';
import Menu from './components/pages/Menu'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
        </div>
      </Router>
    );
  }
}

export default App;
