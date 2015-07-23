import React from 'react';
import { Tabs, Tab } from 'material-ui';
import styles from '../styles/tab-bar';

export default React.createClass({

  render() {
    return (
      <Tabs style={styles.tabs}>
        <Tab
          label='Lists'
          route='inbox'
          style={styles.tab}
          onActive={this._onActive} />
        <Tab
          label='Liof feed'
          style={styles.tab} />
        <Tab
          label='Report'
          style={styles.tab} />
        <Tab
          label='Activity'
          style={styles.tab} />
        <Tab
          label='Tags'
          style={styles.tab} />
      </Tabs>
    );
  }
});
