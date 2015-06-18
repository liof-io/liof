@SearchInput = React.createClass

  mixins: [React.addons.LinkedStateMixin]

  componentDidMount: ->
    @refs.tags.focus()
    @_mountNewItemInput()

  getInitialState: ->
    tags: []

  _onSubmit: ->
    @props.onFormSubmit(@state.tags)

  _mountNewItemInput: ->
    tagsNode = React.findDOMNode(@refs.tags)
    tagsNode.innerHTML = tagsNode.innerHTML + "<span id='newitem'></span>"

  render: ->
    <ReactTagsInput onTagAdd={@_onSubmit} onTagRemove={@_onSubmit}
      valueLink={@linkState('tags')} ref='tags' placeholder='search' />
