React = require('react')
mui = require('material-ui')
AppBar = mui.AppBar

ThemeManager = new mui.Styles.ThemeManager()
Colors = mui.Styles.Colors

App = React.createClass
  displayName: 'App',

  # getInitialState: ->
  #   React.render(<App />, document.body);

  render: ->
    <AppBar
      title='Title'
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>

window.App = App
module.exports = App
