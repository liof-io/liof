import React from 'react';
import { Route, Redirect, DefaultRoute } from 'react-router';

import Main from './components/main';
import { AppBar, TabBar } from './components';

let Routes = (
  <Route name="root" path="/" handler={Main}>
    <Route name="app-bar" handler={AppBar} />
    <Route name="tab-bar" handler={TabBar} />

    <DefaultRoute handler={Main}/>
  </Route>
);

module.exports = Routes;
