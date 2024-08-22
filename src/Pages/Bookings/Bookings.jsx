import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {

   const {user} = useContext(AuthContext);
   const [bookings,setbookings] = useState([]);

   const url = `https://car-doctor-bdserver-sandy.vercel.app/bookings?email=${user?.email}`;

   useEffect(   
    ()=>{
    fetch(url , {credentials:'include'} )
    .then(res=>res.json())
    .then(data=> setbookings(data))
    
     },[])




    return (
        <div>
            <h1 className="text-xl font-bold text-center mt-5 mb-10 text-orange-600"> Total Bookings : {bookings.length} </h1>

            {/* table */}
            <div className="overflow-x-auto mb-20 mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service</th>
        <th>Name</th>
        <th>Email</th>
        <th>Booking Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
    {

        bookings.map(booking=> <BookingRow
        
        key={booking._id}

        booking={booking}
        
        ></BookingRow>)
    }


      {/* row 2 */}
      
     
      
    </tbody>
    {/* foot */}
    
  </table>
</div>






        </div>
    );
};

export default Bookings;