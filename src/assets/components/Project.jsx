import React from 'react';
import  Horiseon from '../../assets/Images/Horiseon.png'

function Project() {
  return (
    <div className=" text-[#000000] bg-[#C2BDB8]">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-centerw-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-serif inline border-b-4 text-dark '>Projects</p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>
       <div >
       <div   className=' w-full sm:grid-cols-2 md:grid-cols-4 gap-4 text-center py-8'> 
       
          <div style={{backgroundImage: `url(${Horiseon})`}} className='shadow-lg shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;] group container rounded-md flex  justify-center items-center mx-auto work-div'>
            
            {/* Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider'>
              Reactjs App
              </span>
              <div className='pt-8 text-center'>
                <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-600 font-bold text-lg' > Demo</button></a>
                <a href=""><button> Code</button></a>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Project;
