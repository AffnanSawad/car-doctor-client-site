import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// cope from react-router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import AboutNav from './Pages/Home/AboutNav/AboutNav.jsx';
import Contact from './Pages/Home/Contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [

  {
    path:'/',
    element: <Home></Home>
  },
  {
    path:'/about',
    element: <AboutNav></AboutNav>
  },
  {
    path:'/contact',
    element: <Contact></Contact>
  },



    ]
  },
]);




// 
createRoot(document.getElementById('root')).render(
 
// imp
  <div className="max-w-7xl mx-auto">

<StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,



  </div>



)
