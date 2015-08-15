import React from 'react';
import Routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

React.render(Routes, document.body);
