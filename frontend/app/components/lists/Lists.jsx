import React from 'react';
import { Grid, Cell } from 'rgx';
import BaseComponent from '../base';
import List from './List';
import { Spacing } from 'material-ui/lib/styles';
import styles from '../../styles/lists/lists';

export default class Lists extends BaseComponent {

  state = {
    didFetchData: false,
    lists: this.props.lists
  }

  render() {
    const minWidth = 384;
    const gutter = Spacing.desktopGutterLess;

    return (
      <div style={styles.content}>

        <Grid gutter={gutter}>
          <Cell min={minWidth}><List /></Cell>
          <Cell min={minWidth}><List /></Cell>
        </Grid>
        <Grid gutter={gutter}>
          <Cell min={minWidth}><List /></Cell>
          <Cell min={minWidth}/>
        </Grid>

      </div>
    );
  }
}
