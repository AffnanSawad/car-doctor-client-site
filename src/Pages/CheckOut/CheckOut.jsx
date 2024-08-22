import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const CheckOut = () => {


    const loadServices = useLoaderData();

    const { _id, title, price , img } = loadServices;


    const handleBookService = e =>{

        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const email = e.target.email.value;
        const date = e.target.date.value;

        const booking = {

            customerName: name ,
            date,
            email,
            img,
            service: title,
            service_id: _id,
            price: price
        }

        // console.log(booking);
    
        // fetch /post

        fetch('https://car-doctor-bdserver-sandy.vercel.app/bookings',  {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
          })



        .then(res=>res.json())
        .then(data=>{
            // console.log(data);

            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Booked Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

          
        })

  



    }


    return (
        <div className="m-10 ">
            <h1 className="text-xl text-center font-bold"> Booked Service : {title} </h1>

             {/*form start */}
             
    
      <form onSubmit={handleBookService} className="card-body">
       
       
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price </span>
          </label>
          <input type="price" defaultValue={price} name="price" placeholder="price" className="input input-bordered" required />
          
        </div>


      </div>




        <div className="form-control mt-6">
          
          <input className="btn btn-error" type="Submit" value='Order Confirm' />
        </div>
      </form>
    
  








            {/* form end */}
        </div>
    );
};

export default CheckOut;