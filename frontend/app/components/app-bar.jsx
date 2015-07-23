import React from 'react';
import { AppBar } from 'material-ui';
import SearchField from '../components/search-field';
import styles from '../styles/app-bar';

export default React.createClass({

  render() {
    return (
      <AppBar
        title='Liof'
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
        style={styles.appBar}
        zDepth={0}>

        <SearchField/>

      </AppBar>
    );
  }
});
