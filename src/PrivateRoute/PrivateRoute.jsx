
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {

  
    // import useContext

    const {user , loading} = useContext(AuthContext);
     

    //  logIn korar por jate jkne click kora hoisilo sekane jai.
    const location = useLocation();
    // console.log(location.pathname);

    // loading show korbe . load korle jei page e ache sekanei thakbe.
    // onno page e nibe na load korle

    if(loading){

        return <span className="loading loading-spinner text-error"></span>
    }

    if(user?.email){

        return children;
    }
//  logIn korar por jate jkne click kora hoisilo sekane jai.
    return  <Navigate state={location.pathname} to='/login'> </Navigate>
};

export default PrivateRoute;