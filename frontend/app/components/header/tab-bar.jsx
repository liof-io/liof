import React from 'react';
import reactMixin from 'react-mixin';
import { Navigation } from 'react-router';
import { Tabs, Tab } from 'material-ui';
import styles from '../../styles/header/tab-bar';

@reactMixin.decorate(Navigation)

export default class TabBar extends React.Component {
  constructor() {
    super();

    this.tabs = {
      default: [
        'lists',
        'feed',
        'report',
        'activity',
        'tags',
        'team'
      ]
    };
  }

  _onActive = (activetab) => {
    this.transitionTo(activetab.props.route)
  }

  render() {
    return (
      <div>
        <Tabs tabItemContainerStyle={styles.tabContainer} style={styles.tabs}>
          {
            this.tabs.default.map((tab) =>
              <Tab
                key={tab}
                label={tab}
                route={tab}
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
