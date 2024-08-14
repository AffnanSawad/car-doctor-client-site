import pic1 from '../../../assets/images/about_us/person.jpg'
import pic2 from '../../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  
  
  
    return (
        <div className="hero bg-white-200 min-h-screen  mb-5">
 
 
  <div className="hero-content flex-col lg:flex-row">
     
     {/* image */}
     <div className="lg:w-1/2 relative">
     
     <img
      src={pic1}
      className="w-3/4 rounded-lg shadow-2xl" />
     <img
      src={pic2}
      className="w-1/2  absolute right-5 top-1/2 rounded-lg border-white border-8 shadow-2xl" />
     
     </div>



    <div className="lg:w-1/2">
    
    <h1 className="text-2xl font-bold text-orange-600 mb-5">About Us</h1>

      <h1 className="text-5xl font-bold text-black">We are qualified & of experience in this field</h1>
      <p className="py-6 text-black">
    
Car services include routine maintenance like oil changes, tire rotations, brake inspections, and fluid checks. Repairs are also common, addressing issues with the engine, transmission, suspension, and exhaust systems. Diagnostic services help identify problems, such as those indicated by the check engine light or other electrical issues. These services ensure that vehicles run smoothly and safely. 
      </p>
      <Link to='/about'>
      
      <button className="btn btn-error">Get More Info</button>


      </Link>
    </div>
  </div>
</div>
    );
};

export default About;