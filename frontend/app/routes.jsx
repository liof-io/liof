import React from 'react';
import { Route } from 'react-router';
import { Main, Lists, Activity, Users } from './components';

export default (
  <Route component={Main}>
    <Route path="/" component={Lists} />
    <Route path="activity" component={Activity} />
    <Route path="team" component={Users} />
  </Route>
);
