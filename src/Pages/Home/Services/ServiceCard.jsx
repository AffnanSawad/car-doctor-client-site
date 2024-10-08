import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
   
   const { _id, service_id,title,img,price,description,  } = service;
   
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-extrabold"> {title} </h2>
          <p className="font-bold"> ${price} </p>
          <div className="card-actions">
        

        <Link to={`/checkout/${_id}`} >
        
        <button className="btn text-white btn-error">Book Now</button>

        
        </Link>



          </div>
        </div>
      </div>
    );
};

export default ServiceCard;