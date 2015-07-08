React = require('react')
mui = require('material-ui')
AppBar = mui.AppBar

ThemeManager = new mui.Styles.ThemeManager()
Colors = mui.Styles.Colors

module.exports = React.createClass
  displayName: 'App'

  render: ->
    <AppBar
      title='Title'
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>


