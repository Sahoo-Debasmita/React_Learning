import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {Home,About,Contact,User,Github} from './Components/export'
import  { githubLoaderInfo } from './Components/Github/Github'
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
 <Route path='/' element={<App></App>}>
<Route path='' element={<Home></Home>}></Route>
<Route path='about' element={<About></About>}></Route>
<Route path='Contact' element={<Contact></Contact>}></Route>
<Route path='user/:userid' element={<User></User>}></Route>
<Route loader={githubLoaderInfo} path='Github' element={<Github></Github>}></Route>
 </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
