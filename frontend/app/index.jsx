import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import configureStore from './store/configureStore';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();

injectTapEventPlugin();

React.render(
  <Provider store={store}>
     {() => <Router history={history} routes={routes} /> }
  </Provider>,
  document.getElementById('app')
);
