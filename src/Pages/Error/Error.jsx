import React from 'react'
import { Link } from 'react-router-dom'
import errorImg from '../../Assets/error.jpg';

const Error = () => {
  return (
    <div className='w-full h-screen flex items-center'>
        <div className='container mx-auto'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold mb-2'>Sorry</h1>
                <h3 className='text-xl'>page is not found.</h3>
                <img className='w-1/2 mx-auto' src={errorImg} alt="error" />
                <Link to={'/'} className='blog-btn'>Back Home</Link>
            </div>
        </div>
    </div>
  )
}

export default Error