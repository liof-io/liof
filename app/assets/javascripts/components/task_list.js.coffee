# @cjsx React.DOM

@TaskList = React.createClass
  displayName: 'TaskList'

  render: ->
    <div className='col-xs-6'>
      <div className='panel panel-default'>
        <div className='panel-body'>
          <h3 className='panel-title'>{@props.data.name}</h3>
          {@props.data.type}
        </div>
        <ul className='list-group'>
          <a href='#' className='list-group-item'>
            Самая первая задачка
            <span className='badge'>23</span>
          </a>
        </ul>
      </div>
    </div>


