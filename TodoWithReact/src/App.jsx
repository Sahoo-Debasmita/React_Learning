import { useState } from 'react'
import { TodoContext,TodoProvider,useTodo } from './Context/TodoContext'


function App() {
const [todos,setTodos]=useState([]);
// For adding a new todo msg
const addTodo=(todo)=>{
setTodos((prev)=>[{id:Date.now(),...todo},...prev])
}
// For updating an existing todo msg
const updateTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id === id ?todo:prevtodo)))
}
// For deleting a perticular todo msg
const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((prevtodo)=>prevtodo.id !=id));
}
// For toggling between completed task
const toggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id === id ? {...prevtodo, completed: !prevtodo} :prevtodo))
}

  return (
    <TodoProvider value={{todo,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
