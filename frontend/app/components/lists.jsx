import React from 'react';
import { Grid, Cell } from 'rgx';
import styles from '../styles/lists';
import { IconButton, List, ListItem, ListDivider, Paper, Checkbox, FontIcon, Styles } from 'material-ui';
const Colors = Styles.Colors;

export default class Lists extends React.Component {

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
    );
  }
}
