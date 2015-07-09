React = require 'react'
mui = require 'material-ui'
injectTapEventPlugin = require 'react-tap-event-plugin'
LiofTheme = require './styles/themes/liof'
Main = require './components/main'

injectTapEventPlugin()

ThemeManager = new mui.Styles.ThemeManager()
ThemeManager.setTheme(LiofTheme)

App = React.createClass
  displayName: 'App'

  childContextTypes:
    muiTheme: React.PropTypes.object

  getChildContext: ->
    muiTheme: ThemeManager.getCurrentTheme()

  render: ->
    <Main/>

React.render <App/>, document.body
