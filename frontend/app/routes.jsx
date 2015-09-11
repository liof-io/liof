import React from 'react';
import { Route, Redirect } from 'react-router';
import Root from './containers/Root';
import { Lists, Activity, Users } from './components';

export default (
  <Route component={Root}>
    <Route path="lists" component={Lists} />
    <Route path="activity" component={Activity} />
    <Route path="team" component={Users} />
    <Redirect from='/' to='/lists' />
  </Route>
);
