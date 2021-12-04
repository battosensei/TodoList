import './style.css'
import React, { useState } from 'react'
import TodoList from './TodoList'

const App = () => {
  let [inputList, setInputList] = useState('')
  let [items, setItems] = useState([])

  const itemEvent = event => {
    setInputList(event.target.value)
  }

  const submits = event => {
    setItems(Items => {
      return [...Items, inputList]
    })
    setInputList('')
  }

  const deleteItems = id => {
    setItems(Items => {
      return Items.filter((arrElem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className='main'>
      <div className='center'>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='Ajouter une tache'
          value={inputList}
          onChange={itemEvent}
          id='input'
        />

        <button
          variant='primary'
          onClick={submits}
          disabled={inputList}
          id='submit'
        >
          +
        </button>

        <ol>
          {items.map((itemVal, index) => {
            return (
              <TodoList
                text={itemVal}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default App
