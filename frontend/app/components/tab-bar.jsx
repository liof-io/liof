import React from 'react';
import { Tabs, Tab } from 'material-ui';
import styles from '../styles/tab-bar';

export default React.createClass({

  render() {
    return (
      <Tabs>
        <Tab
          label='Inbox'
          route='inbox'
          style={styles.tab}
          onActive={this._onActive} />
        <Tab
          label='Frogs'
          style={styles.tab} />
        <Tab
          label='Last'
          style={styles.tab} />
        <Tab
          label='Social'
          style={styles.tab} />
      </Tabs>
    );
  }
});
