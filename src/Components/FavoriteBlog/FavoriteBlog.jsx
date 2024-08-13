import React, { useContext, useState } from 'react'
import {FaHeart} from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useFavorite from '../../Hooks/useFavorite';
import { useNavigate } from 'react-router-dom';


const FavoriteBlog = ({favoriteBlog}) => {

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  // favorite data load form useFavorite hook
  const [favorite,refetch] = useFavorite();
  // BLog author match authored you can not add favorite blog
  const blogAuthorMatch = favorite.find((item)=>item?.blog_id === favoriteBlog?._id && item?.author_email === user?.email);
  // database favorite and user information match
  const blogUserMatch = favorite.find((item)=>item?.blog_id === favoriteBlog?._id && item?.user_email === user?.email);
  // Favorite blog handle 
  const handleFavoriteBlog =(favoriteInfo)=>{
      const blogInfo ={blog_id:favoriteInfo?._id,author_email:favoriteInfo?.author_email, user_email:user?.email};
      // login check first them if save favorite blog match show one alert message otherwise add favorite blog
      if(!user && !user?.email){
        Swal.fire({
            title: 'Please login',
            text: `You can not add without login`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#29C8E6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
        }).then((result)=>{
            if(result.isConfirmed){
              navigate('/login')
            }
        })
      }else if(blogUserMatch){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Your already added',
          showConfirmButton: false,
          timer: 1500
        })
      }else if(blogAuthorMatch){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'You are authored you can not add favorite blog',
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
  
