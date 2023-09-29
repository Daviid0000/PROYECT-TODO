import React, { useState } from 'react'

export const TodoForm = () => {

  const [todoList, setTodoList] = useState([])

  const handleKeyUpEnter = (e) => {
    if (e.key === 'Enter') return

    const newTodo = {
      id: "",
    desc: e.target.value,
    done: false
    }

    setTodoList([
      ...todoList,
      newTodo])
  }
  return (
    <div className='form-group'>
        <label className='form-label' htmlFor="Description" placeholder='My new todo'></label>
        <input 
        className='form-control' 
        id='desc' 
        type="text" 
        onKeyDownCapture={handleKeyUpEnter}/>
    </div>
  )
}
