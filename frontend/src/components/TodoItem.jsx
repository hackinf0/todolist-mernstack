import React from 'react'

function TodoItem() {
  return (
    <div className='flex items-center pl-5 bg-[#9e9dff] shadow-sm w-[500px] h-12'>
        <input type='checkbox' className='text-gray-50'/>
        <span className='ml-3' >Item</span>
    </div>
  )
}

export default TodoItem