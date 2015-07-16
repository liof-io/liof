import React from 'react';
import { AppBar, List, ListItem, ListDivider, FontIcon, Styles } from 'material-ui';
// import colors from 'material-ui/lib/styles/colors';
import MainStyles from '../styles/main';

// let mui = require('material-ui');
// let Colors = mui.Styles.Colors;

let Colors = Styles.Colors;

export default React.createClass({

  render() {
    return (
      <div>
        <AppBar
          title='liof'
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>

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
