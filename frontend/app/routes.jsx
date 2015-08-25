import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import { Main, Lists, Activity, Team } from './components';

export default (
  <Router history={history}>
    <Route component={Main}>
      <Route path="/" component={Lists} />
      <Route path="activity" component={Activity} />
      <Route path="team" component={Team} />
    </Route>
  </Router>
);
