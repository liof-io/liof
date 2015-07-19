import React from 'react';
import { AppBar, List, ListItem, ListDivider, Paper, FontIcon, Styles } from 'material-ui';
import { Grid, Cell } from 'rgx';
import styles from '../styles/main';

let Colors = Styles.Colors;

export default React.createClass({

  render() {
    let cell = (
      <Cell min={384}>
        <Paper zDepth={0}>
          <List style={styles.list}>
            <ListItem rightIcon={<FontIcon className="material-icons" color={Colors.red500}>star</FontIcon>}>First item</ListItem>
            <ListItem>Second item</ListItem>
          </List>
        </Paper>
      </Cell>
    );

    return (
      <div style={styles.root}>
        <AppBar
          title='liof'
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>

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
      </div>
    );
  }
});
