import React from 'react';


const Contact =() =>{
return(
<div className='w-full h-screen bg-[] flex justify-center item-center p-4'>
  <form action="" className='flex flex-col max-w-[600px] w-full'>
    <div className='pb-4'>
        <p className='text-4xl font-serif inline border-b-4 border-[#E5E7EA] text-dark-100'> Contact </p>   
        <p className='py-4 text-black'>Submit the form below or send an email -rolayemi@outlook.com</p>   
      </div>  
      
        <input className='bg-[#E5E7EA] p-2' type="text" placeholder='Name' />
        <input  className='bg-[#E5E7EA] p-2 my-4'  type="text" placeholder='Email' />
        <textarea name="message" className="bg-[#E5E7EA] p-2"  rows="10"></textarea>
        <button className='text-black-700 border-2 hover:bg-[#E5E7EA] hover:border-[#E5E7EA] px-4 py-3  mx-auto  rounded my-8 flex items-center '>Let's collaborate</button>

      

  </form>
</div>

)
}

export default Contact;
