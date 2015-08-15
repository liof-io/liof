import React from 'react';
import { AppBar } from 'material-ui';
import { SearchField } from './';
import styles from '../../styles/header/header-bar';

export default class HeaderBar extends React.Component {

  render() {
    return (
      <AppBar
        title='Liof'
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
        style={styles.headerBar}
        zDepth={0}>

        <SearchField/>

      </AppBar>
    );
  }
}
