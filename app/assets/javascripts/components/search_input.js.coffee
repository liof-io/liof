@SearchInput = React.createClass

  mixins: [React.addons.LinkedStateMixin]

  componentDidMount: ->
    @refs.tags.focus()
    @_mountNewItemBox()

  getInitialState: ->
    tags: []

  _onSubmit: ->
    @props.onFormSubmit(@state.tags)

  _mountNewItemBox: ->
    tagsNode = React.findDOMNode(@refs.tags)
    tagsNode.innerHTML = tagsNode.innerHTML + "<span id='new-item-box'></span>"

  render: ->
    <ReactTagsInput onTagAdd={@_onSubmit} onTagRemove={@_onSubmit}
      valueLink={@linkState('tags')} ref='tags' placeholder='search' />
