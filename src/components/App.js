import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Navbar,
  Home,
  History,
  MostSearch,
  BlogList,
  Content,
  Page404,
} from './index';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-main-container">
          <Navbar />
          <Switch>
            <Route path="/history" component={History} />
            <Route path="/mostSearch" component={MostSearch} />
            <Route path="/showContent" component={Content} />
            <Route path="/search" component={BlogList} />
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
