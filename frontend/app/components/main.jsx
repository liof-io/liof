import React from 'react';
import { AppBar, List, ListItem, ListDivider, Paper, FontIcon, Styles } from 'material-ui';
import { Grid, Cell } from 'rgx';
import styles from '../styles/main';

let Colors = Styles.Colors;

export default React.createClass({

  render() {
    let cell = (
      <Cell min={400}>
        <Paper>
          <List styles={styles.list}>
            <ListItem rightIcon={<FontIcon className="material-icons" color={Colors.red500}>star</FontIcon>}>First item</ListItem>
            <ListItem>Second item</ListItem>
          </List>
        </Paper>
      </Cell>
    );

    return (
      <div styles={styles.root}>
        <AppBar styles={styles.appbar}
          title='liof'
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>

        <div styles={styles.grid}>
          <Grid gutter={20}>
            { cell }
            { cell }
          </Grid>
          <Grid gutter={20}>
            { cell }
            <Cell min={400}/>
          </Grid>

        </div>

        <Paper>
          <List>
            <ListItem rightIcon={<FontIcon className="material-icons" color={Colors.red500}>star</FontIcon>}>First item</ListItem>
            <ListItem>Second item</ListItem>
          </List>
        </Paper>
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
