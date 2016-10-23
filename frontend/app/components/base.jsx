import React, { Component } from 'react';
import mui from 'material-ui';
import LiofTheme from '../styles/themes/liof';

let ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(LiofTheme);

export default class BaseComponent extends Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }
}
