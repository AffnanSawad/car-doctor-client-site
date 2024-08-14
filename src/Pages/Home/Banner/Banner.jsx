import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[700px] mb-5 mt-5">
        <div id="slide1" className="carousel-item relative w-full">
          <img
           src={image1}
            className="w-full rounded-xl" />
        
        {/* headimg */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform   bg-gradient-to-r from-brown-900 to-gray-500">
            
        <div className='w-1/3 space-y-7 ml-16'>

   <h1 className='text-6xl font-bold text-white'> Affordable Price For Car Servicing   </h1>
   <p className='font-bold text-white'> There are many variations of passages of  available, but the majority have suffered alteration in some form  </p>


   {/* button  */}

   <div className='flex gap-4 mt-5  mr-5'>
   
   <button className="btn btn-warning">Discover More</button>
 
 
 
 
 <Link to='/contact'>
 
 <button className="btn btn-error">Emergency Contact</button>
 </Link>
 


   </div>


        </div>


          </div>

        
        {/* button */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle btn-error">❮</a>
            <a href="#slide2" className="btn btn-circle btn-error">❯</a>
          </div>
        </div>




        <div id="slide2" className="carousel-item relative w-full">
          <img
             src={image2}
            className="w-full" />

<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform   bg-gradient-to-r from-brown-900 to-gray-500">
            
            <div className='w-1/3 space-y-7 ml-16'>
    
       <h1 className='text-6xl font-bold text-white'> Affordable Price For Car Servicing   </h1>
       <p className='font-bold text-white'> There are many variations of passages of  available, but the majority have suffered alteration in some form  </p>
    
    
       {/* button  */}
    
       <div className='flex gap-4 mt-5  mr-5'>
       
       <button className="btn btn-warning">Discover More</button>
    <button className="btn btn-error">Latest Project</button>
    
       </div>
    
    
            </div>
    
    
              </div>



          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle btn-error">❮</a>
            <a href="#slide3" className="btn btn-circle btn-error">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={image3}
            className="w-full" />


<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform   bg-gradient-to-r from-brown-900 to-gray-500">
            
            <div className='w-1/3 space-y-7 ml-16'>
    
       <h1 className='text-6xl font-bold text-white'> Affordable Price For Car Servicing   </h1>
       <p className='font-bold text-white'> There are many variations of passages of  available, but the majority have suffered alteration in some form  </p>
    
    
       {/* button  */}
    
       <div className='flex gap-4 mt-5  mr-5'>
       
       <button className="btn btn-warning">Discover More</button>
    <button className="btn btn-error">Latest Project</button>
    
       </div>
    
    
            </div>
    
    
              </div>




          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle btn-error">❮</a>
            <a href="#slide4" className="btn btn-circle btn-error">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
           src={image4}
            className="w-full" />



<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform   bg-gradient-to-r from-brown-900 to-gray-500">
            
            <div className='w-1/3 space-y-7 ml-16'>
    
       <h1 className='text-6xl font-bold text-white'> Affordable Price For Car Servicing   </h1>
       <p className='font-bold text-white'> There are many variations of passages of  available, but the majority have suffered alteration in some form  </p>
    
    
       {/* button  */}
    
       <div className='flex gap-4 mt-5  mr-5'>
       
       <button className="btn btn-warning">Discover More</button>
    <button className="btn btn-error">Latest Project</button>
    
       </div>
    
    
            </div>
    
    
              </div>

  




          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle btn-error">❮</a>
            <a href="#slide1" className="btn btn-circle btn-error">❯</a>
          </div>
        </div>
      </div>

    );
};

export default Banner;