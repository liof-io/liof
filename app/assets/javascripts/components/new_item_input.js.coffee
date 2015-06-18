@NewItemInput = React.createClass

  _handleSubmit: (e) ->
    e.preventDefault()
    newitem = React.findDOMNode(@refs.newitem).value.trim()
    if !newitem
      return
    @props.onItemSubmit(newitem)

  render: ->
    <form className="newitem-form" onSubmit={@_handleSubmit}>
      <input type='text' className='newitem-input' ref='newitem' placeholder='add' />
    </form>
