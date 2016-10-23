import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell } from 'rgx';
import BaseComponent from '../Base';
import { fetchItems } from '../../actions/ItemActions';
import List from './List';
import { Spacing } from 'material-ui/lib/styles';
import styles from '../../styles/lists/lists';

class Lists extends BaseComponent {
  constructor(props) {
    super(props);
    // this.state = dispatch(fetchItems());
  }

  // componentDidMount() {
  //   const { dispatch, items } = this.props;
  //   dispatch(fetchItems());
  // }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems());
    console.log(this.props)
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.items !== this.props.items) {
  //     const { dispatch, items } = nextProps;
  //     dispatch(fetchItems());
  //   }
  // }

  static propTypes = {
    // items: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  // renderItem(item, index) {
  //   return <li key={index}>1{item.name}</li>;
  // }
  //  { items.map(this.renderItem) }

  render() {
    const { items } = this.props;
    const minWidth = 384;
    const gutter = Spacing.desktopGutterLess;
    // console.log(this.props)

    return (
      <div style={styles.content}>

        <Grid gutter={gutter}>
          <Cell min={minWidth}><List /></Cell>
          <Cell min={minWidth}><List /></Cell>
        </Grid>
        <Grid gutter={gutter}>
          <Cell min={minWidth}><List /></Cell>
          <Cell min={minWidth} />
        </Grid>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    items: state.items
  };
}

export default connect(mapStateToProps)(Lists);

