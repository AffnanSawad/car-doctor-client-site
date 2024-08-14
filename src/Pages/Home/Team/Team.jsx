import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'

const Team = () => {
    return (
        <div className="mt-2 mb-4">
            
    <h1 className="text-4xl font-bold text-orange-600 text-center">  Meet Our Team </h1> <br />

    <p className="text-center text-black">Introducing Our Skilled Technical Team: Experienced Professionals Dedicated to <br /> Delivering Top-Quality Automotive Care, Service, and Customer Satisfaction</p>

    {/* cards */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-10'>

    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={team1}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Car Engine Plug</h2>
    <p>Engine Expert</p>
    <div className="card-actions">
      <button className="btn btn-outline btn-error"> +001234556 </button>
    </div>
  </div>
</div>
{/* card 1 end */}



<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={team2}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Master Technician</h2>
    <p>Technical Expert</p>
    <div className="card-actions">
    <button className="btn btn-outline btn-error"> +001234557 </button>

    </div>
  </div>
</div>

{/* card 2 end */}


<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={team3}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Automotive Technician/Mechanic</h2>
    <p>Parts Specialist</p>
    <div className="card-actions">
    <button className="btn btn-outline btn-error"> +001234558 </button>
    </div>
  </div>
</div>




    </div>
    


        </div>
    );
};

export default Team;