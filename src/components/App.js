import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, Home } from './index';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-main-container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
