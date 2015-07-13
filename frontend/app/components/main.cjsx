React = require('react')

{ AppBar, List, ListItem, ListDivider, FontIcon, Styles } = require('material-ui')
{ Colors } = Styles

styles = require '../styles/main'

module.exports = React.createClass
  displayName: 'Main'

  render: ->
    <div>
      <AppBar
        title='liof'
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>

        <ListDivider />
        <List>
          <ListItem rightIcon={<FontIcon className="material-icons" color={Colors.red500}>star</FontIcon>}>First item</ListItem>
          <ListItem>Second item</ListItem>
        </List>
        <ListDivider />
        <List>
          <ListItem>First item</ListItem>
            <ListItem primaryText="Inbox" open={true}>
              <ListItem primaryText="Starred" />
              <ListItem primaryText="Sent Mail">
                <ListItem primaryText="Drafts" />
              </ListItem>
          </ListItem>
        </List>
    </div>
