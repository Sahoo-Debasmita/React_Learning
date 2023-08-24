import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
 let myobj={Name:"jp",Price:400}
 let Arr=[3,5,35,43]
  return (
    <>
   <h1 className='bg-green-600 text-black rounded-xl mb-4'>Hello Developer</h1>
   <Card username="Tina"btntext="Click Me"/>
   <Card username="John" btntext="Visit Here"/>
    </>
  )
}

export default App
