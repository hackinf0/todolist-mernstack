import { useState } from 'react'
import CreateTodo from './components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' h-full flex justify-center items-center'>
        <CreateTodo/>
      </div>
    </>
  )
}

export default App
