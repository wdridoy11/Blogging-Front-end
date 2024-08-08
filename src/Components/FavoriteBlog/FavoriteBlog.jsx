import React, { useContext, useState } from 'react'
import {FaHeart} from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useFavorite from '../../Hooks/useFavorite';


const FavoriteBlog = ({favoriteBlog}) => {

  const {user} = useContext(AuthContext);
  const [favorite,refetch] = useFavorite();
  // database favorite and user information match
  const blogUserMatch = favorite.find((item)=>item?.blog_id === favoriteBlog?._id && item?.user_email === user?.email);

  const handleFavoriteBlog =(favoriteInfo)=>{
      const blogInfo ={blog_id:favoriteInfo?._id, user_email:user?.email};
      // If save favorite blog match show one alert message otherwise add favorite blog
      if(blogUserMatch){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Your already added',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        // post favorite blog send database
        if(user && user?.email){
            fetch(`${process.env.REACT_APP_API_URL}/favorite`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(blogInfo)
            })
            .then((respons)=>respons.json())
            .then(((data)=>{
                refetch(); // instand a refresh
                if(data.insertedId){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Favorite blog added successfully",
                    showConfirmButton: false,
                    timer: 1000
                  });
                }
            }))
            .catch((err)=>{
                console.log(err.message)
            })
         }
          
      }    
  }

  return (
    <>
        <button onClick={()=>handleFavoriteBlog(favoriteBlog)} className={blogUserMatch ? "blog-favorite bg-blog-primary text-white":"blog-favorite"}>
            <FaHeart className='text-xs'></FaHeart>
        </button>
    </>
  )
}

export default FavoriteBlog











  // const handleFavoriteBlog=()=>{
  //   if(!isFavorite){
  //     setIsFavorite(true);
  //   }else{
  //     setIsFavorite(false);
  //   }
  // }
  // console.log(favoriteBlog);

  // favorite blog handle 
  
