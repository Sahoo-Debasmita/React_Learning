import { useEffect, useState } from 'react'
import { TodoContext,TodoProvider,useTodo } from './Context/TodoContext'
import TodoItem from './Components/Todoitem';
import TodoForm from './Components/Todoform';


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
  setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id === id ? {...prevtodo, completed: !prevtodo.completed} :prevtodo))
}
// Get the todos previously in the localstorage
useEffect(()=>{
  const todo=JSON.parse(localStorage.getItem("todos"))
  if(todo && todo.length>0){
    setTodos(todo);
  }
},[])
// Set the todos in the localstorage
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
