import React from 'react';
import { Avatar, Toolbar, ToolbarGroup, IconButton, Paper, ToolbarTitle, ToolbarSeparator, TextField, DropDownMenu, DropDownIcon, RaisedButton, FontIcon, Styles } from 'material-ui';

import styles from '../styles/main';
// let { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from ToolBar;

export default React.createClass({

  render() {
    let filterOptions = [
      { payload: '1', text: 'All Broadcasts' },
      { payload: '2', text: 'All Voice' },
      { payload: '3', text: 'All Text' }
    ];
    let iconMenuItems = [
      { payload: '1', text: 'Download' },
      { payload: '2', text: 'More Info' }
    ];

    return (
      <Paper>
        <Toolbar>
          <ToolbarGroup key={1} float="left">

            <ToolbarTitle text="Options" />
          </ToolbarGroup>
          <ToolbarGroup key={2} float="left">
            <TextField
              style={styles.search}
              hintText="Liof search" />
          </ToolbarGroup>
          <ToolbarGroup key={3} float="left">
            <DropDownMenu menuItems={filterOptions} />
          </ToolbarGroup>
          <ToolbarGroup key={4} float="right">
            <ToolbarTitle text="Options" />
            <IconButton iconClassName="material-icons">menu</IconButton>
            <FontIcon className="material-icons">menu</FontIcon>
            <DropDownIcon iconClassName="material-icons" iconLigature="expand_more" menuItems={iconMenuItems} />
            <Avatar
              icon={
                <FontIcon className="material-icons">menu</FontIcon>
              } />
          </ToolbarGroup>
          <Avatar
              icon={
                <FontIcon className="material-icons">menu</FontIcon>
              } />
        </Toolbar>
      </Paper>
    );
  }
});
