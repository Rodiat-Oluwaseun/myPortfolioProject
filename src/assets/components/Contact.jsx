import React, { useState } from 'react';


const Contact =() =>{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://getform.io/f/7axYX9by', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data, '❤️😎'); // Handle response from API
      // Optionally, reset form fields or display success message
    } catch (error) {
      console.error('Error:', error);
      // Optionally, display error message to user
    }
  };


return(
<div className='w-full h-screen bg-[] flex justify-center item-center p-4'>
  <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
    <div className='pb-4'>
        <p className='text-4xl font-serif inline border-b-4 border-[#E5E7EA] text-dark-100'> Contact </p>   
        <p className='py-4 text-black'>Submit the form below or send an email - rolayemi@outlook.com</p>   
      </div>  
      
        <input className='bg-[#E5E7EA] p-2'
        value={formData.name}
        onChange={handleChange}
        type="text" placeholder='Name' />
        <input  className='bg-[#E5E7EA] p-2 my-4' 
        value={formData.email}
        onChange={handleChange}
        type="text" placeholder='Email' />
        <textarea name="message" 
        value={formData.message}
        onChange={handleChange}
        placeholder='message'
        className="bg-[#E5E7EA] p-2"  rows="10"></textarea>
        <button className='text-black border-2 hover:bg-[#E5E7EA] hover:border-[#E5E7EA] px-4 py-3  mx-auto  rounded my-8 flex items-center '>Let's collaborate</button>

      

  </form>
</div>

)
}

export default Contact;
