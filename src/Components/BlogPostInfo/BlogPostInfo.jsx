import React from 'react'
import {FaCalendarAlt, FaComment, FaUser,} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogPostInfo = () => {
  return (
    <div className='flex gap-5'>
        {/* author name */}
        <Link className='text-blog-primary duration-500 flex items-center gap-2' to="/author-profile">
            <p className='text-sm text-blog-primary'><FaUser /></p>
            <p className='text-sm'>John Deo</p>
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