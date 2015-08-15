import React from 'react';
// import { HeaderBar, TabBar } from './';
import HeaderBar from './header-bar';
import TabBar from './tab-bar';
import styles from '../../styles/header/header';

export default class Header extends React.Component {

  render() {
    return (
      <div style={styles.header}>
        <div style={styles.center}>
          <HeaderBar/>
          <TabBar/>
        </div>
      </div>
    );
  }
}
