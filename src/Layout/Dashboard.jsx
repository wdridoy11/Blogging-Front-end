import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import img from '../Assets/Rectangle 27.png';

const Dashboard = () => {
  return (
    <div className='min-h-screen md:flex'>
        <div className='bg-gray-100 w-64 p-4'>
            <div>
              <div>
                  <img className='w-40 h-40 rounded-full object-cover mx-auto' src={img} alt="" />
              </div>
            </div>
            <div className='relative'>
                <div className='mt-5'>
                    <Link className='block my-2 py-3 mb-1 bg-blog-primary px-3 rounded-md text-white'>Dashboard</Link>
                    <Link className='block py-3 px-3 mb-1 rounded-md text-black' to={"/dashboard/save"}>Save</Link>
                    <Link className='block py-3 px-3 mb-1 rounded-md text-black' to={"/dashboard/favorite"}>Favorite</Link>
                    <Link className='block py-3 px-3 mb-1 rounded-md text-black'>Profile</Link>
                </div>
               
            </div>
            <div>
                <div>
                    <Link className='block py-3 px-3 mb-1 rounded-md text-black' to={"/"}>Home</Link>
                    <Link className='block py-3 px-3 mb-1 rounded-md text-black' to={"/blogs"}>Blogs</Link>
                </div>
            </div>
        </div>
        <div className='flex-1 p-10'>
            <div className='w-full'>
              <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Dashboard