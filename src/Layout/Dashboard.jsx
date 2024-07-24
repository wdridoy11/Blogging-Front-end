import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import img from '../Assets/Rectangle 27.png';
import { FaArrowRight, FaBars, FaBookOpen, FaBookmark, FaChartBar, FaHeart, FaHome, FaUserAlt } from 'react-icons/fa';

const Dashboard = () => {

  const [isActive, setIsActive] = useState('false');
  const [isSidebarActive, setIsSidebarActive] = useState('false');

  const handleToggle = () =>{
      setIsActive(!isActive);
  }

  const handleDashboardSidebar =()=>{
    setIsSidebarActive(!isSidebarActive)
    console.log(isSidebarActive)
  }

  return (
    <div className='min-h-screen md:flex'>
        <div className='bg-gray-100 w-full p-2 relative block md:hidden'>
            <div className='text-end pr-5'>
                <button onClick={handleDashboardSidebar} className='bg-blog-primary p-2 rounded-md'>
                    <FaBars className='text-2xl text-white' />
                </button>
            </div>
        </div>
        {/* <div className="Hello"> */}
        {/* <div className={(isSidebarActive)=>`bg-gray-100 min-h-screen w-64 p-4 ${isSidebarActive ? 'block':'hidden'}`}> */}
        {/* <div className={
            isSidebarActive ? 
            'bg-gray-100 w-full p-4 relative block md:hidden' :
            'bg-gray-100 min-h-screen w-64 p-4 relative hidden md:block'
        }> */}
        {/* <div className={({ isSidebarActive }) =>`bg-gray-100 min-h-screen w-64 p-4 ${ isSidebarActive ? 'block' : 'hidden'}`}> */}
        <div className='bg-gray-100 min-h-screen w-64 p-4 relative hidden md:block'>
            <div>
                <div>
                    <img className='w-40 h-40 rounded-full object-cover mx-auto' src={img} alt="" />
                </div>
                <div>
                    <div>
                        <div className='mt-5'>
                            <NavLink className={({ isActive }) =>` dashboard-link ${ isActive ? 'bg-blog-primary text-white' : 'text-black'}`} to="/dashboard"> <FaChartBar /> Dashboard</NavLink>
                            <NavLink className={({ isActive }) =>` dashboard-link ${ isActive ? 'bg-blog-primary text-white' : 'text-black'}`} to="/dashboard/save"><FaBookmark /> Save</NavLink>
                            <NavLink className={({ isActive }) =>` dashboard-link ${ isActive ? 'bg-blog-primary text-white' : 'text-black'}`} to="/dashboard/favorite"><FaHeart /> Favorite</NavLink>
                            <NavLink className={({ isActive }) =>` dashboard-link ${ isActive ? 'bg-blog-primary text-white' : 'text-black'}`} to="/dashboard/user-profile"><FaUserAlt /> Profile</NavLink>
                        </div>
                    </div>
                    <div className='md:absolute w-11/12 bottom-3 left-3 mr-1 border-t border-slate-300'>
                        <div className='mt-1'>
                          <NavLink className='dashboard-link' to="/"><FaHome /> Home</NavLink>
                          <NavLink className='dashboard-link' to="/blogs"><FaBookOpen /> Blogs</NavLink>
                          <button className='dashboard-link blog-btn rounded-full py-2 px-10 text-white text-base'> Log Out <FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex-1 p-5'>
            <div className='w-full'>
              <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Dashboard