import React, { useState } from 'react'
import {FaHeart} from 'react-icons/fa';


const FavoriteBlog = ({favoriteBlog}) => {

  const {_id, } = favoriteBlog ;
  const [isFavorite,setIsFavorite] = useState(false)
  // const handleFavoriteBlog=()=>{
  //   if(!isFavorite){
  //     setIsFavorite(true);
  //   }else{
  //     setIsFavorite(false);
  //   }
  // }
  // console.log(favoriteBlog);
  const handleFavoriteBlog=()=>{
    let favoriteBlog ={blog_id:_id}
    
  }

  return (
    <>
        <button onClick={handleFavoriteBlog} className={isFavorite ? "blog-favorite bg-blog-primary text-white":"blog-favorite"}>
            <FaHeart className='text-xs'></FaHeart>
        </button>
    </>
  )
}

export default FavoriteBlog