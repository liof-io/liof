@ItemInput = React.createClass

  _handleSubmit: (e) ->
    e.preventDefault()
    newitem = React.findDOMNode(@refs.iteminput).value.trim()
    if !newitem
      return
    @props.onItemSubmit(newitem)

  render: ->
    <form className="item-form" onSubmit={@_handleSubmit}>
      <input type='text' className='item-input' ref='iteminput' placeholder='add' />
    </form>
