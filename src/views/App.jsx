import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./home-page/HomePage'));


const routes = (
  <Suspense fallback={<div> Loading </div> }>
    <Switch>
      <Route exact path={'/'} component={HomePage} />
    </Switch>
  </Suspense>
);
export default class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        {routes}
      </Router>
    );
  }
}


App.propTypes = {
  history: PropTypes.object
};

