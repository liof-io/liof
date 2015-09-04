import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import configureStore from './store/configureStore';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();

injectTapEventPlugin();

React.render(
  <Provider store={store}>
    {() =>
      <Router children={routes} history={history} />
    }
  </Provider>,
  document.body
);
