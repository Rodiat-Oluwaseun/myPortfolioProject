import React from 'react';
import Html5 from '../../assets/Images/Html5.png';
import Css from '../../assets/Images/css.png';
import Javascript from '../../assets/Images/javascript.png';
import Github from '../../assets/Images/github.png';
import reactLogo from '../../assets/Images/react.png';
import Tailwind from '../../assets/Images/tailwind.png';
import Vue from '../../assets/Images/vuejs.png';


const Skill = () =>{
    return (
        <div className='w-full h-screen bg-[#C2BDB8] text-[#000000] '> 
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='text-4xl font-serif inline border-b-2 border-[#E5E7EA] text-dark-100'>
            <p>Skills</p>
            <p> // Here are the framework I've worked with</p>
        </div>
        {/* html logo */}
       <div className='	w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
       <div className='shadow-md shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;] hover:scale-110 duration-500'>
            <div><img  className='w-20 mx-auto'src={Html5} alt="" /></div>
            <p className='my-4'>HTML</p>
        </div>
        {/* Css logo */}
        <div className='shadow-md shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;] hover:scale-110 duration-500'>
            <div><img  className='w-20 mx-auto'src={Css} alt="" /></div>
            <p className='my-4'>CSS</p>
        </div>
        {/* javascript logo */}
        <div className='shadow-md shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;] hover:scale-110 duration-500'>
            <div><img  className='w-20 mx-auto'src={Javascript} alt="" /></div>
            <p className='my-4'>JAVASCRIPT</p>
        </div>
        {/* github logo */}
        <div className='shadow-md shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;] hover:scale-110 duration-500'>
            <div><img  className='w-20 mx-auto'src={Github} alt="" /></div>
            <p className='my-4'>GITHUB</p>
        </div>

        <div className='shadow-md shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;] hover:scale-110 duration-500'>
            <div><img  className='w-20 mx-auto'src={Html5} alt="" /></div>
            <p className='my-4'>HTML</p>
        </div>
        {/* react logo */}
        <div className='shadow-md shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;] hover:scale-110 duration-500'>
            <div><img  className='w-20 mx-auto'src={reactLogo} alt="" /></div>
            <p className='my-4'>REACT</p>
        </div>

        {/* tailwind logo */}
        <div className='shadow-md shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;] hover:scale-110 duration-500'>
            <div><img  className='w-20 mx-auto'src={Tailwind} alt="" /></div>
            <p className='my-4'>TAILWINDCSS</p>
        </div>

        {/* vuejs logo */}

        <div className='shadow-md shadow-[box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;] hover:scale-110 duration-500'>
            <div><img  className='w-20 mx-auto'src={Vue} alt="" /></div>
            <p className='my-4'>VUEJS</p>
        </div>
       </div>   
        </div>
        </div>
    )
}

export default Skill;