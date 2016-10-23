import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import BaseComponent from './Base';
import { Header, Lists } from './';
import { createItem, fetchItems } from '../actions/ItemActions';

export default class App extends BaseComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children : React.PropTypes.element,
    // items: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  static defaultProps = {
    isFetching: true
  }

  // Work
  // componentWillMount() {
  //   const { dispatch } = this.props;
  //   dispatch(fetchItems());
  //   console.log(this.props)
  // }

  render() {
    const { children, items, isFetching } = this.props;
    return (
      <div>
        <Header createItem={createItem} />
        {isFetching && <p>fetching...</p>}

        {children}
      </div>
    );
  }
}
