import React from 'react';
import Header from './header/header';
import { Styles } from 'material-ui';
import LiofTheme from '../styles/themes/liof';
import styles from '../styles/main';

const ThemeManager = new Styles.ThemeManager();
ThemeManager.setTheme(LiofTheme);

export default class Main extends React.Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
