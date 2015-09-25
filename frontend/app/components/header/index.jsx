import React from 'react';
import HeaderBar from './HeaderBar';
import TabBar from './TabBar';
import SearchField from './SearchField';
import styles from '../../styles/header/header';

export default class Header extends React.Component {

  render() {
    return (
      <div style={styles.header}>
        <div style={styles.center}>
          <HeaderBar>
            <SearchField />
          </HeaderBar>
          <TabBar />
        </div>
      </div>
    );
  }
}
