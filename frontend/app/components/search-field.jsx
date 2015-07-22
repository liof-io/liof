import React from 'react';
import { TextField, IconButton, FontIcon } from 'material-ui';
import styles from '../styles/search-field';

export default React.createClass({

  render() {
    return (
      <TextField fullWidth={true} style={styles.search} hintText="search" />
    );
  }
});
