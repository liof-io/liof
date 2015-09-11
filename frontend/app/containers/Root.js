import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import * as ItemActions from '../actions/ItemActions';

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemActions, dispatch);
}

export default connect(mapStateToProps)(App);

// export default connect(mapStateToProps)(App);