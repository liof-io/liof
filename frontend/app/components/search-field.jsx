import React from 'react';
import { TextField, IconButton, FontIcon } from 'material-ui';
import Select from 'react-select';
import styles from '../styles/search-field';

export default class SearchField extends React.Component {

  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

    return (
      <Select
        allowCreate={true}
        placeholder="Search"
        multi={true}
        delimiter=","
        options={options} />
    );
  }

}
