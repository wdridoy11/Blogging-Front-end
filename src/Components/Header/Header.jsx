import React from 'react'
import { FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import img from '../../Assets/Rectangle 27.png';

const Header = () => {
  return (
    <div className='bg-slate-200 py-3'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div>

                    <div>
                        
                    </div>


                </div>
                <div className='flex items-center gap-5'>
                    <Link className='text-base font-medium' to={"/"}>Home</Link>
                    <Link className='text-base font-medium' to={"/blogs"}>Blogs</Link>
                    <button><FaSun></FaSun></button>
                    <Link className='blog-btn' to={"/login"}>login</Link>
                    <Link to={"/dashboard"}>
                        <img className='w-10 h-10 rounded-full object-cover' src={img} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header