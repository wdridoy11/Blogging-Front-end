import React from 'react'
import {FaCalendarAlt, FaComment, FaUser,} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogPostInfo = () => {
  return (
    <div className='flex gap-5'>
        {/* author name */}
        <Link className='text-[#29c8e6] duration-500' to={""}>
            <div className='flex items-center gap-1'>
                <div>
                    <Link className='text-sm text-[#29c8e6]' to={``}><FaUser /></Link>
                </div>
                <div>
                    <h5 className='text-sm'>John Deo</h5>
                </div>
            </div>
        </Link>
        {/* blog date */}
        <div className='flex items-center gap-1 text-[#8799ad]'>
            <div>
                <Link className='text-sm text-[#8799ad]' to={``}><FaCalendarAlt /></Link>
            </div>
            <div>
                <h5 className='text-sm'>7 March 2019</h5>
            </div>
        </div>
        {/* blog comment */}
        <div className='flex items-center gap-1 text-[#8799ad]'>
            <div>
                <Link className='text-sm text-[#8799ad]' to={``}><FaComment /></Link>
            </div>
            <div>
                <h5 className='text-sm'> <span>30</span> Comments</h5>
            </div>
        </div>
    </div>
  )
}

export default BlogPostInfo