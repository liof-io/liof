import React from 'react';
import { IconButton, List, ListItem, ListDivider, Paper, Checkbox, FontIcon, Styles } from 'material-ui';
import { Grid, Cell } from 'rgx';
import { AppBar, TabBar } from '../components';
import styles from '../styles/main';

let Colors = Styles.Colors;

export default React.createClass({

  render() {
    let cell = (
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
      <div style={styles.root}>

        <div style={styles.header}>
          <div style={styles.center}>
            <AppBar/>
            <TabBar/>
          </div>
        </div>

        <div style={styles.content}>
          <Grid gutter={16}>
            { cell }
            { cell }
          </Grid>
          <Grid gutter={16}>
            { cell }
            <Cell min={384}/>
          </Grid>

          <br />
          <List subheader="Hangout notifications">
            <ListItem
              leftCheckbox={<Checkbox />} >
              Notifications
            </ListItem>
            <ListItem
              leftCheckbox={<Checkbox />}
              secondaryText="Hangouts message">
              Sounds
            </ListItem>
            <ListItem
              leftCheckbox={<Checkbox />}
              secondaryText="Hangouts video call">
              Video sounds
            </ListItem>
          </List>

        </div>

      </div>
    );
  }
});
