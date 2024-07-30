import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div>
        <ul>
            <li className='my-2'><Link className='dark-light-text hover:text-[#29c8e6] duration-500'>Freelancing</Link></li>
            <li className='my-2'><Link className='dark-light-text hover:text-[#29c8e6] duration-500'>Web Design</Link></li>
            <li className='my-2'><Link className='dark-light-text hover:text-[#29c8e6] duration-500'>Web Development</Link></li>
            <li className='my-2'><Link className='dark-light-text hover:text-[#29c8e6] duration-500'>Software Development</Link></li>
            <li className='my-2'><Link className='dark-light-text hover:text-[#29c8e6] duration-500'>Video Editing</Link></li>
        </ul>
    </div>
  )
}

export default Categories