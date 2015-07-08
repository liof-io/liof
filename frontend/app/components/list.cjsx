React = require('react')

List = React.createClass
  displayName: 'List',

  render: ->
    <div className='col-xs-6'>
      <div className='panel panel-default'>
        <div className='panel-body'>
          <h3 className='panel-title'>{@props.data.name}</h3>
          {@props.data.type}
        </div>
        <ul className='list-group'>
          <a href='#' className='list-group-item'>
            First task
            <span className='badge'>23</span>
          </a>
          <a href='#' className='list-group-item'>
            Second task
            <span className='badge'>11</span>
          </a>
        </ul>
      </div>
    </div>

module.exports = List
