import React from 'react';
import { Router } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

React.render(
  <Router children={routes} history={history} />,
  document.body
);
