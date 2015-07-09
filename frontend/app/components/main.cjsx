React = require('react')
mui = require('material-ui')
AppBar = mui.AppBar

module.exports = React.createClass
  displayName: 'Main'

  render: ->
    <div>
      <AppBar
        title='liof'
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>
    </div>
