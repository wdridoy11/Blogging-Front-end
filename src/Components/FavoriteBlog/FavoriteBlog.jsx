import React from 'react'
import {FaHeart} from 'react-icons/fa';
const FavoriteBlog = () => {
  return (
    <>
        <button className='blog-favorite'>
            <FaHeart className='text-xs'></FaHeart>
        </button>
    </>
  )
}

export default FavoriteBlog