import React from 'react';
import { AppBar, List, ListItem, ListDivider, Paper, FontIcon, Styles } from 'material-ui';
import { Grid, Cell } from 'react-flexr';
import styles from '../styles/main';
import 'normalize.css';
import 'react-flexr/styles.css';

let Colors = Styles.Colors;

export default React.createClass({

  render() {
    let cell = (
      <Cell size='5/12'>
        <Paper>
          <List>
            <ListItem rightIcon={<FontIcon className="material-icons" color={Colors.red500}>star</FontIcon>}>First item</ListItem>
            <ListItem>Second item</ListItem>
          </List>
        </Paper>
      </Cell>
    );

    return (
      <div styles={styles.root}>
        <AppBar
          title='liof'
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>

        <Grid>
          { cell }
          { cell }
          { cell }
        </Grid>

        <ListDivider />
        <List>
          <ListItem rightIcon={<FontIcon className="material-icons" color={Colors.red500}>star</FontIcon>}>First item</ListItem>
          <ListItem>Second item</ListItem>
        </List>
        <ListDivider />
        <List>
          <ListItem>First item</ListItem>
            <ListItem primaryText="Inbox" open={true}>
              <ListItem primaryText="Starred" />
              <ListItem primaryText="Sent Mail">
                <ListItem primaryText="Drafts" />
              </ListItem>
          </ListItem>
        </List>
      </div>
    );
  }
});
