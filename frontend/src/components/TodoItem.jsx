import React, { useState } from 'react'

function TodoItem({title}) {
    const [checked,setChecked] = useState(false)
 
     const handleCheck = ()=>{
        console.log(checked)
     }
  return (
    <div className='flex items-center pl-5 mb-2 bg-[#9e9dff] shadow-sm w-[500px] h-12'>
        <input type='checkbox' value={checked} onChange={handleCheck}  className='text-gray-50'/>
        <span  className='ml-3' >{title}</span>
    </div>
  )
}

export default TodoItem