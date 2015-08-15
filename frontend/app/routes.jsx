import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import { Main, Lists, Activity } from './components';

export default (
  <Router history={history}>
    <Route path="/" component={Main}>
      <Route path="lists" component={Lists} />
      <Route path="activity" component={Activity} />
    </Route>
  </Router>
);
