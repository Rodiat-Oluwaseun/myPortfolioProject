import React from 'react';
import { useState } from 'react';
import logo from '../../assets/Images/rodiatlogo.png';
import { NavLink } from 'react-router-dom';
import {FaBars ,FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';


const NavTabs = () =>{
   const [tabMenu , setTabMenu] =useState(false)
   const handleClick = () => setTabMenu(!tabMenu)
  return(
    <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#030303] text-[#C5C0B9]'>
      <div>
        <img src={logo} alt="Log Image"  style={{width:'50px'}}/>
      </div>
      <div>
        <ul className='hidden md:flex'>
        <li>
          <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        </li>
          <li><NavLink
          to="projectpage"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project Page
        </NavLink>
          </li>
          <li>
          <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
          </li>
        </ul>
      </div>

          {/* handbugger-menu */}
          <div onClick={handleClick} className='md:hidden z-10 '>
            {!tabMenu? <FaBars /> :<FaTimes />}
          </div>
          {/* Mobile -menu */}
          <div>
          <ul className={!tabMenu? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#030303] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        </li>
          <li className='py-6 text-4xl'><NavLink
          to="projectpage"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project Page
        </NavLink>
          </li>
          <li className='py-6 text-4xl'>
          <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
          </li>
        </ul>
            {/* Social media icon */}
            <div className=' hidden lg:flex fixed  flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B78021]'>
                 <a className=" flex justify-between item-center w-full text-grey" href='/'>
                  Linkedin <FaLinkedin size={30} />
                 </a>
              </li>

              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B78021]'>
                 <a className=" flex justify-between item-center w-full text-grey" href='/'>
                  Github <FaGithub size={30} />
                 </a>
              </li>

              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B78021]'>
                 <a className=" flex justify-between item-center w-full text-grey" href='/'>
                  Resume <BsFillPersonLinesFill size={30} />
                 </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B78021]'>
                 <a className=" flex justify-between item-center w-full text-grey" href='/'>
                  Email <HiOutlineMail size={30} />
                 </a>
              </li>
            </ul>
            </div>

          </div>
    </div>
    

    
  )
}


export default NavTabs;