import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, Home, History, MostSearch, BlogList } from './index';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-main-container">
          <Navbar />
          <Switch>
            <Route path="/history" component={History} />
            <Route path="/mostSearch" component={MostSearch} />
            <Route path="/search" component={BlogList} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
