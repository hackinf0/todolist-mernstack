import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todoList}) {
    const {title} = todoList

    console.log(title)

  return (
    <div className=' overflow-y-auto h-[400px]'>
        {todoList.map((item => (
            <TodoItem key={item.id} title={item.title}/>
        )))}
    </div>
  )
}

export default TodoList 