import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseComponent from './Base';
import { Header } from './';
import * as ItemActions from '../actions/ItemActions';

class App extends BaseComponent {
  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { items, dispatch } = this.props;
    const actions = bindActionCreators(ItemActions, dispatch);

    return (
      <div>
        <Header createItem={actions.createItem} />

        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(mapStateToProps)(App);
