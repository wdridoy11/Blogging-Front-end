import React from 'react'
import {FaBookmark} from 'react-icons/fa';

const BlogSave = () => {
  return (
    <>
        <button className='blog-favorite'>
            <FaBookmark className='text-xs'></FaBookmark>
        </button>
    </>
  )
}

export default BlogSave