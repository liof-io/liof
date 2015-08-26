import React, { Component } from 'react';
import { IconButton, List as MuiList, ListItem, Paper, Styles } from 'material-ui';
import styles from '../../styles/lists/list';

export default class List extends Component {

  render() {
    return (
      <Paper zDepth={0} style={styles.list}>
        <MuiList>
          <ListItem style={styles.listitem} rightIcon={<IconButton iconClassName="material-icons">expand_more</IconButton>}>Первая задачка</ListItem>
          <ListItem style={styles.listitem}>Second item</ListItem>
        </MuiList>
      </Paper>
    );
  }
}
