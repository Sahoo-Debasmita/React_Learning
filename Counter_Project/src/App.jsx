import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,changeval]=useState(10);

  let Addcounter=()=>{
    if(count<20){
      changeval(count+=1)
    }else{
      return
    }
  }
let RemoveCounter=()=>{
  if(count>0){
    changeval(count-1)
  }else{
    return
  }
}
  return (
    <>
     <h1>Counter Value:{count}</h1>
     <button onClick={Addcounter}>Add Number</button><br />
     <button onClick={RemoveCounter}> Remove Number</button>
     <h2>Counter:{count}</h2>
    </>
  )
}

export default App
