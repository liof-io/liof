@SearchInput = React.createClass

  mixins: [React.addons.LinkedStateMixin]

  componentDidMount: ->
    @refs.tags.focus()
    @_mountAddInput()

  getInitialState: ->
    tags: []

  _onSubmit: (e) ->
    @props.onFormSubmit(e)

  _mountAddInput: ->
    tagsNode = React.findDOMNode(@refs.tags)
    tagsNode.innerHTML = tagsNode.innerHTML + React.renderToString(<AddInput />)

  render: ->
    <ReactTagsInput onChange={@_onSubmit} onChangeInput={@_onComplete}
      valueLink={@linkState('tags')} ref='tags' placeholder='search' />
