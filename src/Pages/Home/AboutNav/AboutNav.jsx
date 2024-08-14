import pic1 from '../../../assets/images/about_us/person.jpg'
import pic2 from '../../../assets/images/about_us/parts.jpg'

const AboutNav = () => {
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
          
         
      
            <h1 className="text-5xl font-bold text-black">We are qualified & of experience in this field</h1>
          
            <p className="  text-black mb-4 mt-4">
            Car services include routine maintenance like oil changes, tire rotations, brake inspections, and fluid checks. Repairs are also common, addressing issues with the engine, transmission, suspension, and exhaust systems. Diagnostic services help identify problems, such as those indicated by the check engine light or other electrical issues. These services ensure that vehicles run smoothly and safely. </p>
            <p className="  text-black mb-4">
            Battery services ensure the car's battery is functioning correctly, with tests, charges, or replacements as needed. Fluid checks are a part of this routine, where various fluids like coolant, transmission fluid, and power steering fluid are inspected and topped off to keep the car running smoothly.</p>


            <p className="  text-black mb-4"> Specialized services cater to specific needs, such as air conditioning services, which involve checking and repairing the car’s A/C system to ensure it functions properly during hot weather. Alignment services are also important, as they ensure that the wheels are aligned correctly, preventing uneven tire wear and improving overall handling. Fuel system services focus on the efficiency of the car's fuel system, ensuring proper fuel delivery and combustion. </p>
            
        <p className="  text-black mb-4">  Overall, car services are essential for maintaining vehicle performance, safety, and longevity. </p>


          </div>
        </div>
      </div>
    );
};

export default AboutNav;