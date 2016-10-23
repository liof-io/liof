import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import { Navigation, Link } from 'react-router';
import { Tabs, Tab } from 'material-ui';
import styles from '../../styles/header/tab-bar';

@reactMixin.decorate(Navigation)

export default class TabBar extends Component {
  constructor(props) {
    super(props);

    this.tabs = {
      defaults: [
        'Lists',
        'Feed',
        'Report',
        'Activity',
        'Tags',
        'Team'
      ]
    };
  }

  getRoute(route) {
    return route.toLowerCase();
  }

  handleActive = (tab) => {
    this.transitionTo(tab.props.route)
  }

  render() {
    return (
      <div>

        <Tabs tabItemContainerStyle={styles.tabContainer} style={styles.tabs}>
          {
            this.tabs.defaults.map((tab) =>
              <Tab
                key={tab}
                label={tab}
                route={this.getRoute(tab)}
                style={styles.tab}
                onActive={this.handleActive}
              />
            )
          }
        </Tabs>
      </div>
    );
  }
}
