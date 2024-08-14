import { Link } from "react-router-dom";
import logo from '../../../assets/icons/logo.svg'

const NavBar = () => {


//   nav links

  const NavLinks = <>
  
  
  <li className="font-bold"> <Link to='/'> Home  </Link>   </li>
  <li className="font-bold"> <Link to='/about'> About  </Link>   </li>
  <li className="font-bold"> <Link to='/services'>  Services </Link>   </li>
  <li className="font-bold"> <Link to='/blog'>  Blog   </Link>   </li>
  <li className="font-bold"> <Link to='/contact'>  Contact  </Link>   </li>
  
  
  </>







    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            

            {NavLinks}


            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-2xl font-bold mb-10">
          
          {/* <h2 className="text-2xl font-bold">Car-Doctor</h2> */}

          <img src={logo} alt="" />
          
          
          
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
        {NavLinks}


          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-secondary">Appoinment</button>
        </div>
      </div>
    );
};

export default NavBar;