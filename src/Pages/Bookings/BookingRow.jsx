import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({booking}) => {

    
      const {_id,email,img,date,price,customerName,service} = booking

     // handleDelete
     const handleDelete = id => {

        console.log('deleted', _id);
  
  
        // Sweetalert2
  
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
  
          
            // fetching delete
            fetch(`http://localhost:5000/bookings/${id}`,{
  
              method:'DELETE'
            })
  
            .then(res=>res.json())
  
            .then(data=> {
  
              console.log(data);
  
              if(data.deletedCount > 0 ){
  
            
                Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"          
            
  
              })
  
             // remaining foods After Delete
             const remaining = booking.fitler( book => book._id !== _id )
  
             setRemainingFoods(remaining);
  
           
  
          
  
  
  
              }
            })
          
  
  
            
          }
        });
  
      }

    return (
        <tr>
        <th>
          <label>
          <button onClick={ ()=> handleDelete(_id)} className="btn btn-error">Delete</button>

          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
              <div className="text-sm opacity-50"> ${price} </div>
            </div>
          </div>
        </td>
        <td>
          

          {customerName}
          
        </td>
        <td>{email} </td>
        <th>
          <button className="btn btn-ghost btn-xs">{date} </button>
        </th>
      </tr>
    );
};

export default BookingRow;