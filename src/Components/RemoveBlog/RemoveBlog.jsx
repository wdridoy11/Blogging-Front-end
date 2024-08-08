import React from 'react'
import { FaHeart, FaRemoveFormat, FaTruck } from 'react-icons/fa'

const RemoveBlog = ({blog}) => {
  console.log(blog)
  return (
    <>
        <button className='blog-favorite hover:bg-red-600 hover:border-red-600'>
            <FaHeart className='text-xs'></FaHeart>
        </button>
    </>
  )
}

export default RemoveBlog