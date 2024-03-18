import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeButton from '../theme/ThemeButton'
import logo from './user.png'
import './header.css'
function Header() {
  const[active,setActive]=useState(false);
  const menubarHandler=()=>{
    const menuBar = document.querySelector(".menu-bar");
    if(active){

      menuBar.classList.remove("active-menuBar");
    }else{
      menuBar.classList.add("active-menuBar");

    }
    setActive(!active);
  }
  const hideNavigationHandler=()=>{
    setActive(false)
    menubarHandler();
  }
  return (
    // border-b-2 border-gray-500
    <>
    <div className='  flex justify-center fixed items-center w-full h-[10vh] top-0 bg-gray-200 dark:bg-black dark:text-white border-b-2 border-[rgba(63,62,62,0.1)] z-50 '>
      <nav className=' flex justify-between w-4/5 items-center h-16'>
        <Link to={"/"} className='flex  items-center'><img src={logo} alt="" className=' w-[3.5rem] overflow-hidden rounded-[50%]' /></Link>
        <ul className=' hidden lg:flex justify-between w-1/3 gap-x-6 items-center text-2xl font-semibold'>
            <li><NavLink 
            to={"/"} 
            className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-indigo-700 "
                          : "text-gray-700 dark:text-white "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 dark:hover:text-indigo-700  `
                    }> Home</NavLink></li>
            <li>
              <NavLink to={"courses"} smooth
              className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-indigo-700 "
                  : "text-gray-700 dark:text-white "
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
            }>Courses</NavLink>
            </li>
            <li>
              <NavLink to={"contact"} smooth
              className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-indigo-700 "
                  : "text-gray-700 dark:text-white "
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
            }>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"article"}
              className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-indigo-700 "
                  : "text-gray-700 dark:text-white "
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
            }>Articles</NavLink>
            </li>
        </ul>
        <div className='flex justify-center items-center'>
          <NavLink to={"login"} className=' max-md:hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-xl mr-4 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-6 py-2 disabled:pointer-events-none disabled:opacity-50 text-white h-auto bg-indigo-600 hover:bg-indigo-700'>Sign Up</NavLink>
          <div
                className="menu-bar flex justify-between flex-col cursor-pointer mr-4 lg:hidden"
                style={{
                  height: "24px",
                  width: "35px",
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={menubarHandler}
              >
                <span className=" bg-black dark:bg-white rounded-sm"></span>
                <span className=" bg-black dark:bg-white rounded-sm"></span>
                <span className=" bg-black dark:bg-white rounded-sm"></span>
              </div>
          <ThemeButton/>

        </div>
      </nav>
    </div>
     {active?<ul className=' navLinks lg:hidden flex flex-col fixed top-[9vh] w-full backdrop-blur-lg justify-between gap-x-6 items-center text-2xl font-semibold h-[50vh] transition duration-400' style={{zIndex:"999"}}>
            <li><NavLink 
            to={"/"} 
            className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-indigo-700 "
                          : "text-gray-700 dark:text-white "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 dark:hover:text-indigo-700  `
                    } onClick={hideNavigationHandler}> Home</NavLink></li>
            <li>
              <NavLink to={"courses"} smooth
              className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-indigo-700 "
                  : "text-gray-700 dark:text-white "
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
            } onClick={hideNavigationHandler}>Courses</NavLink>
            </li>
            <li>
              <NavLink to={"contact"} smooth
              className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-indigo-700 "
                  : "text-gray-700 dark:text-white "
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
            } onClick={hideNavigationHandler}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"article"}
              className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-indigo-700 "
                  : "text-gray-700 dark:text-white "
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
            } onClick={hideNavigationHandler}>Articles</NavLink>
            </li>
            <li>
              <NavLink to={"login"} onClick={hideNavigationHandler} className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-indigo-700 "
                  : "text-gray-700 dark:text-white "
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `}>Sign Up</NavLink>
            </li>
        </ul>:""}
    </>
  )
}

export default Header
