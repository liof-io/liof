import React, { Component } from 'react';

export default class Lists2 extends Component {

  getInitialState: ->
    didFetchData: false
    lists: @props.lists

  componentDidMount: ->
    # @_fetchLists({})

  _fetchLists: (data)->
    $.ajax
      url: Routes.lists_path()
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

  _handleItemSubmit: (item) ->
    alert item
    $.ajax
      url: Routes.new_list_path()
      dataType: 'json'
      type: 'POST'
      data: item
      success: ((data) ->
        @setState data: data
        return
      ).bind(this)
    .fail @_fetchDataFail

  render() {
    let listsNode = @state.lists.map (list) ->
      <List data={list}/>

    let noDataNode =
      <div className='col-xs-12'>
        <h4>No list found...</h4>
      </div>

    <div>11111111123
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
  }
}
