import React from 'react';
import BaseComponent from './base';
import { Grid, Cell } from 'rgx';
import styles from '../styles/lists';
import { IconButton, List, ListItem, Paper, Styles } from 'material-ui';
import ActionCheckCircle from 'material-ui/lib/svg-icons/action/check-circle';
const Colors = Styles.Colors;

export default class Lists extends BaseComponent {

  constructor() {
    super();
  }

  render() {
    const cell = (
      <Cell min={384}>
        <Paper zDepth={0} style={styles.list}>
          <List>
            <ListItem style={styles.listitem} rightIcon={<IconButton iconClassName="material-icons">expand_more</IconButton>}>Первая задачка</ListItem>
            <ListItem style={styles.listitem}>Second item</ListItem>
          </List>
        </Paper>
      </Cell>
    );

    return (
      <div style={styles.content}>

        <Grid gutter={16}>
          { cell }
          { cell }
        </Grid>
        <Grid gutter={16}>
          { cell }
          <Cell min={384}/>
        </Grid>

      </div>
    );
  }
}
