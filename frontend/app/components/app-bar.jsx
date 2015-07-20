import React from 'react';
import { AppBar, Avatar, TextField, IconButton, FontIcon } from 'material-ui';
import styles from '../styles/app-bar';

export default React.createClass({

  render() {
    return (
      <AppBar
        style={styles.title}
        title='Liof'
        iconElementRight={<IconButton iconClassName="material-icons">expand_more</IconButton>}
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}>

        <TextField style={styles.search} hintText="Liof search" />
      </AppBar>
    );
  }
});
