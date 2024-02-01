import React, { useState } from "react";
import TodoList from "./TodoList";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
function CreateTodo() {
  const [todoTitle,setTodoTitle]= useState('')
  const [todoList,setTodoList] = useState([])
  const [checked,setChecked] = useState(false)

  const handleInput = (e)=>{
    console.log(e.target.value)
    setTodoTitle(e.target.value)
   
  }
  const addTodo = ()=>{
    //todoList.push({title:todoTitle})
    if(todoTitle==='') return;
    setTodoList([...todoList, {title:todoTitle,id:Date.now(),check:false}])
    setTodoTitle('')
  }

  const isChecked =(id) =>{
     setTodoList(todoList.map(todo => {
       if(todo.id === id && todo.check){
        return {...todo, check:false}
       }
       else{
        return {...todo,check:true}
       }
     }))
     console.log(todoList)
  }
 

  const handleDelete = (id) =>{
    setTodoList(todoList.filter(todo=> todo.id !== id ))
  }
  console.log('todoTitle',todoTitle)
  console.log('todoList',todoList)

  return (
    <div className=" flex flex-col font-[inter]  w-[880px] h-[580px] shadow-md bg-white ">
      <div className="flex justify-center">
        <span>Todolist demo</span>
      </div>
      <div className="pt-5 flex flex-row mx-16">
        <input
          placeholder="enter a todo"
          value={todoTitle}
          onChange={(e)=>handleInput(e)}
          className="w-[700px] h-10 p-3 rounded-[3px] border-2 border-gray-300"
        />
        <select className="flex justify-center h-10 ml-5 p-3">
          <option>All</option>
          <option>Done</option>
          <option>Not done</option>
        </select>
      </div>
      <div className="flex flex-col items-center  mt-5 justify-center">
      <TodoList  handleDelete={handleDelete} todoList={todoList} isChecked={isChecked} />
      </div>
      <div className="flex h-full justify-end items-end mb-5 mr-5">
        <button onClick={addTodo}>
          <PlusCircleIcon className="w-16 h-16 text-green-500" />
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
