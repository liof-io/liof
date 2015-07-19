import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'normalize.css';
import 'flexboxgrid';
import { Styles } from 'material-ui';
import LiofTheme from './styles/themes/liof';
import Main from './components/main';

injectTapEventPlugin();

let ThemeManager = new Styles.ThemeManager();
ThemeManager.setTheme(LiofTheme);

class App extends React.Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render() {
    return (<Main/>);
  }
}

React.render(<App/>, document.body);
