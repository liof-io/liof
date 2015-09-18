import React, { Component } from 'react';
import Select from 'react-select';
import '../../styles/react-select/index.less';

export default class SearchField extends Component {

  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

    return (
      <Select
        name="q"
        allowCreate={true}
        placeholder="Search"
        multi={true}
        delimiter=","
        options={options}
      />
    );
  }
}
