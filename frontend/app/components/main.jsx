import React from 'react';
import BaseComponent from './base';
import { Header } from './header';
import styles from '../styles/main';

export default class Main extends BaseComponent {
  render() {
    return (
      <div style={styles.root}>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
