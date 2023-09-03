import { useState } from "react"

function App() {
  const [color,setColor]=useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className=" flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>{setColor("red")}} className="flex justify-center px-3 py-1 rounded-full" style={{backgroundColor:"red"}}>
          RED
        </button>
        <button onClick={()=>{setColor("green")}} className="flex justify-center px-3 py-1 rounded-full" style={{backgroundColor:"Green"}}>
          GREEN
        </button>
        <button onClick={()=>{setColor("yellow")}} className="flex justify-center px-3 py-1 rounded-full" style={{backgroundColor:"Yellow"}}>
          YELLOW
        </button>
        <button onClick={()=>{setColor("Purple")}} className="flex justify-center px-3 py-1 rounded-full" style={{backgroundColor:"Purple"}}>
          PURPLE
        </button>
        <button onClick={()=>{setColor("black")}} className="flex justify-center px-3 py-1 rounded-full text-white" style={{backgroundColor:"Black"}}>
          BLACK
        </button>
        <button onClick={()=>{setColor("blue")}} className="flex justify-center px-3 py-1 rounded-full text-white" style={{backgroundColor:"Blue"}}>
          BLUE
        </button>
        <button onClick={()=>{setColor("Grey")}} className="flex justify-center px-3 py-1 rounded-full text-white" style={{backgroundColor:"Grey"}}>
          GREY
        </button>
        <button onClick={()=>{setColor("Pink")}} className="flex justify-center px-3 py-1 rounded-full text-white" style={{backgroundColor:"Pink"}}>
          PINK
        </button>
        </div>
        </div>
     </div>
    </>
  )
}

export default App
