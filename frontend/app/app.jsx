import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { Router } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = createStore(rootReducer);

injectTapEventPlugin();

React.render(
  <Provider store={store}>
    {() =>
      <Router children={routes} history={history} />
    }
  </Provider>,
  document.body
);
