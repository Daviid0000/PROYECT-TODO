import React from 'react'

export const TodoList = (todoList, handleToggleDone) => {
  return (
    <div>
        
        {
            todoList.map((data) =>{
                return (
                    <Todo key={data.id} 
                    desc={data.desc} 
                    done={data.done} 
                    handleToggleDone={() => handleToggleDone(data.id)}/>
                )
            })
        }
        
    </div>
  )
}
