import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

//   jehetu SERVICES component ta kono Route E na. tai ADIM system e korte hbe..
// route e thekle loader , fetch diye kora jaito.

// ADIM SYSTEM DIYE DATA LOAD. FAKE JSON THEKE..

const [services,setServices] = useState([]);


useEffect(   
    
    ()=>{

        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            setServices(data);
        })
    }
    
    ,[])










    return (
        <div>

    <div className="text-center mt-2 mb-4">
    
    <h1 className="text-2xl text-orange-500 font-bold">Services</h1>

    

    <h1 className="text-4xl text-black font-bold">Our Service Area</h1>

    <p className="font-bold mt-2 ">Complete Auto Care: Maintenance, Repairs, Diagnostics, <br /> and  Specialized Services to Keep Your Vehicle Running Smoothly and Safely Every Day</p>

    </div>


    {/* mapping */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
    
    {
     
    
     services.map(service => <ServiceCard
     
     key={service._id}

     service={service}
     
     
     ></ServiceCard> )


    }

    </div>


        </div>
    );
};

export default Services;