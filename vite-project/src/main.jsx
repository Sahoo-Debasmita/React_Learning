import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const SelfCreated=( 
//   <a href='htttps://google.com' target='_blank'>ClickMe</a>
// )
const anotherusername="Hello I am again";
const SelfCreated=React.createElement(
  'a',
  {href:'htttps://google.com',target:'_blank'},
  'ClickMe I am google',
  anotherusername
)
ReactDOM.createRoot(document.getElementById('root')).render(

SelfCreated
    
)
