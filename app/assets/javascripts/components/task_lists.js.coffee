# @cjsx React.DOM

@TaskLists = React.createClass
  displayName: 'TaskLists'

  getInitialState: ->
    didFetchData: false
    lists: []

  componentDidMount: ->
    @_fetchLists({})

  _fetchLists: (data)->
    $.ajax
      url: Routes.root_path()
      dataType: 'json'
      data: data
    .done @_fetchDataDone
    .fail @_fetchDataFail

  _fetchDataDone: (data, textStatus, jqXHR) ->
    return false unless @isMounted()
    @setState
      didFetchData: true
      lists: data

  _fetchDataFail: (xhr, status, err) =>
    console.error @props.url, status, err.toString()

  _handleOnSearchSubmit: (query) ->
    @_fetchLists
      q: query

  render: ->
    listsNode = @state.lists.map (list) ->
      <TaskList key={list.id} data={list}/>

    noDataNode =
      <div className='warning'>
        <h4>No list found...</h4>
      </div>

    <div>
      <TaskSearch onFormSubmit={@_handleOnSearchSubmit}/>
      <br />
      <br />
      <div className='row'>
        {
          if @state.lists.length > 0
            {listsNode}
          else if @state.didFetchData
            {noDataNode}
        }
      </div>
    </div>



