import React from 'react'
import {FaHeart} from 'react-icons/fa';
const FavoriteBlog = () => {
  return (
    <>
        <button className='text-black border dark:text-white border-[#29c8e6] rounded-full hover:bg-[#29c8e6] hover:text-white duration-500 p-1.5'>
            <FaHeart className='text-xs'></FaHeart>
        </button>
    </>
  )
}

export default FavoriteBlog