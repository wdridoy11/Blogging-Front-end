import React from 'react'
import { FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-200 py-3'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div></div>
                <div>
                    <Link className='text-base mx-4 font-medium' to={"/"}>Home</Link>
                    <Link className='text-base mx-4 font-medium' to={"/blogs"}>Blogs</Link>
                    <button><FaSun></FaSun></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header