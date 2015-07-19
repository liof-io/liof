import React from 'react';
import { AppBar, List, ListItem, ListDivider, Paper, FontIcon, Styles } from 'material-ui';
import styles from '../styles/main';

let Colors = Styles.Colors;

export default React.createClass({

  render() {
    let cell = (
        <div className="col-xs-6">
          <Paper>
            <List>
              <ListItem rightIcon={<FontIcon className="material-icons" color={Colors.red500}>star</FontIcon>}>First item</ListItem>
              <ListItem>Second item</ListItem>
            </List>
          </Paper>
        </div>
    );

    return (
      <div styles={styles.root}>
        <AppBar
          title='liof'
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>

        <div className="row">
          { cell }
          { cell }
        </div>

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
