import React, { Component } from 'react';
import { IconButton, List as MuiList, ListItem, Paper, Styles } from 'material-ui';
import styles from '../../styles/lists/list';

export default class List extends Component {

  render() {
    return (
      <Paper zDepth={0} style={styles.list}>
        <MuiList>
          <ListItem style={styles.listitem} rightIcon={<IconButton iconClassName="material-icons">expand_more</IconButton>}>Первая задачка</ListItem>
          <ListItem style={styles.listitem}>Second item</ListItem>
        </MuiList>
      </Paper>
    );
  }
}

// List = React.createClass
//   displayName: 'List',

//   render: ->
//     <div className='col-xs-6'>
//       <div className='panel panel-default'>
//         <div className='panel-body'>
//           <h3 className='panel-title'>{@props.data.name}</h3>
//           {@props.data.type}
//         </div>
//         <ul className='list-group'>
//           <a href='#' className='list-group-item'>
//             First task
//             <span className='badge'>23</span>
//           </a>
//           <a href='#' className='list-group-item'>
//             Second task
//             <span className='badge'>11</span>
//           </a>
//         </ul>
//       </div>
//     </div>
