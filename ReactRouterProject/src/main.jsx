import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import { BrowserRouter, Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// Method-1 of creating router

// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'',
//       element:<Home/>
//     },
//     {
//      path:'about',
//      element:<About/>
//     },
//     {
//       path:'Contact',
//       element:<Contact/>
//     }
//   ]
// }])

// Method-2 of creating router
const router=createBrowserRouter(
  createRoutesFromElements(
 <Route path='/' element={<Layout></Layout>}>
<Route path='' element={<Home></Home>}></Route>
<Route path='about' element={<About></About>}></Route>
<Route path='Contact' element={<Contact></Contact>}></Route>
 </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
