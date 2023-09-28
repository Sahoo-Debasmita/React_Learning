import { useState } from 'react'
import { addTodo } from './Features/Todos/todoSlice'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'

function App() {
 

  return (
    <>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
