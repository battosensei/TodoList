import React from 'react'

const TodoList = props => {
  return (
    <div className='todo_style'>
      <div
        className='delete'
        aria-hidden='true'
        onClick={() => {
          props.onSelect(props.id)
        }}
      >
        X
      </div>
      <li>{props.text}</li>
    </div>
  )
}

export default TodoList
