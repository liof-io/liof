import React from 'react';
import BaseComponent from './Base';
import { Header } from './';
import { bindActionCreators } from 'redux';
import * as ItemActions from '../actions/ItemActions';
import { connect } from 'react-redux';
import styles from '../styles/main';

@connect(state => ({ items: state.items }))
export default class Main extends BaseComponent {
  render() {
    const { items, dispatch } = this.props;

    return (
      <div style={styles.root}>
        <Header/>

        {this.props.children}
      </div>
    );
  }
}
