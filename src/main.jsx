import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

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
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import LogIn from './LogIn/LogIn.jsx';
import SignUp from './SignUp/SignUp.jsx';
import CheckOut from './Pages/CheckOut/CheckOut.jsx';
import Bookings from './Pages/Bookings/Bookings.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';


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
  {
    path:'/login',
    element: <LogIn></LogIn>
  },
  {
    path:'/signup',
    element: <SignUp></SignUp>
  },
  {
    path:'/checkout/:id',
    element:<CheckOut></CheckOut>,
    loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
  },
  {
    path: '/bookings',
    element: <PrivateRoute> <Bookings></Bookings> </PrivateRoute>
  },



    ]
  },
]);




// 
createRoot(document.getElementById('root')).render(
 
// imp
  <div className="max-w-7xl mx-auto">

<StrictMode>
    

   


<AuthProvider>
 
<RouterProvider router={router} />

</AuthProvider>

   


    
  </StrictMode>,



  </div>



)
