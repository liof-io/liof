React = require('react')
mui = require('material-ui')

{ AppBar, List, ListItem, ListDivider } = mui

styles = require '../styles/main'

module.exports = React.createClass
  displayName: 'Main'

  render: ->
    <div>
      <AppBar
        title='liof'
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>

        <List>
          <ListItem >First item</ListItem>
          <ListItem >Second item</ListItem>
        </List>
        <ListDivider />
    </div>
