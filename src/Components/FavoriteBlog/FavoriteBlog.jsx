import React from 'react'
import {FaHeart} from 'react-icons/fa';


const FavoriteBlog = () => {

  const handleFavoriteBlog=()=>{
    console.log("Helo")
  }

  return (
    <>
        <button onClick={handleFavoriteBlog} className='blog-favorite'>
            <FaHeart className='text-xs'></FaHeart>
        </button>
    </>
  )
}

export default FavoriteBlog