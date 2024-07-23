import React from 'react'
import {FaBookmark} from 'react-icons/fa';

const BlogSave = () => {
  return (
    <>
        <button className='text-black border dark:text-white border-[#29c8e6] rounded-full hover:bg-[#29c8e6] hover:text-white duration-500 p-1.5'>
            <FaBookmark className='text-xs'></FaBookmark>
        </button>
    </>
  )
}

export default BlogSave