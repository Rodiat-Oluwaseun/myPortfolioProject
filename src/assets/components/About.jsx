import React from 'react';
import Kikky from '../../assets/Images/Kikky.jpg';



const About = () =>{
    return (
        <div className='w-full h-screen bg-[#C2BDB8] text-[#000000] '> 
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 place-items-center'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-serif inline border-b-4 border-[#B78021]'>About </p> 
            </div>
            <div></div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <h1>I'm Rodiat, nice to meet you.Please take a look around</h1>
            </div>
            <div className='relative h-80'>
                <img src={Kikky} alt="Image"  className="absolute inset-0  h-full object-cover border-radius-10px justify-items-center"/>
                <div className='absolute inset-0'></div>
             </div>

            </div>
        </div>
        </div>
    )
}

export default About;