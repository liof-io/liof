import React from 'react';
import reactMixin from 'react-mixin';
import { Navigation } from 'react-router';
import { Tabs, Tab } from 'material-ui';
import styles from '../../styles/header/tab-bar';

@reactMixin.decorate(Navigation)

export default class TabBar extends React.Component {
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

    this.defaultRoute = 'Lists'
  }

  getRoute(route) {
    if (route == this.defaultRoute) {
      return '/';
    }
    return route.toLowerCase();
  }

  _onActive = (activetab) => {
    this.transitionTo(activetab.props.route)
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
                onActive={this._onActive}
              />
            )
          }
        </Tabs>
      </div>
    );
  }
}
