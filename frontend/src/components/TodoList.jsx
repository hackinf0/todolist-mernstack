import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todoList,isChecked,handleDelete}) {
 
  

  return (
    <div className=' overflow-y-auto h-[400px]'>
        {todoList.map((item => (
            <TodoItem key={item.id} id={item.id} title={item.title} check={item.check} isChecked={isChecked} handleDelete={handleDelete}/>
        )))}
    </div>
  )
}

export default TodoList 