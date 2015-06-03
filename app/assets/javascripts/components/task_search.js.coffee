# @cjsx React.DOM

@TaskSearch = React.createClass
  displayName: 'TaskSearch'

  componentDidMount: ->
    @refs.tags.inputFocus()

  _handleOnSubmit: (e) ->
    searchTags = @refs.tags.getTags().join(', ')
    @props.onFormSubmit(searchTags)

  render: ->
    <div className='input-group'>
      <div className='input-group-btn'>
        <button className='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown' aria-expanded='false'>
          <span className='caret'></span>
        </button>
        <ul className='dropdown-menu' role='menu'>
          <li><a href='#'>Action</a></li>
          <li className='divider'></li>
          <li><a href='#'>Action</a></li>
        </ul>
      </div>
      <ReactTagsInput onChange={@_handleOnSubmit} ref='tags' placeholder='search' tags={[]} />
    </div>



