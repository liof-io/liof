import React from 'react';
import reactMixin from 'react-mixin';
import { Navigation } from 'react-router';
import { Tabs, Tab } from 'material-ui';
import Activity from '../activity';
import styles from '../../styles/header/tab-bar';

@reactMixin.decorate(Navigation)

export default class TabBar extends React.Component {

  constructor() {
    super();
    this._onActive = this._onActive.bind(this);
  }

  _onActive(tab){
    this.transitionTo(tab.props.route)
  }

  render() {
    return (
      <div>
        <Tabs tabItemContainerStyle={styles.tabContainer} style={styles.tabs}>
          <Tab
            label='Lists'
            route='lists'
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
              route='activity'
              style={styles.tab}
              onActive={this._onActive} />
          <Tab
            label='Tags'
            style={styles.tab} />
        </Tabs>
      </div>
    );
  }
}
