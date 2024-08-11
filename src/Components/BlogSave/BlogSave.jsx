import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import {FaBookmark} from 'react-icons/fa';
import useSave from '../../Hooks/useSave';
import { AuthContext } from '../../Providers/AuthProvider';



const BlogSave = ({saveBlog}) => {

  const {user} = useContext(AuthContext)
  // save blog data load form useSave hook
  const [save,refetch] = useSave()

  // Blog author match authored you can not add save blog
  const blogAuthorMatch = save.find((item)=>item?.blog_id === saveBlog?._id && item?.author_email === user?.email);

  // database save and user information match
  const blogUserMatch = save.find((item)=>item?.blog_id === saveBlog?._id && item?.user_email === user?.email);

  // save blog handle 
  const handleSaveBlog =(saveInfo)=>{
      const blogInfo ={blog_id:saveInfo?._id,author_email:saveInfo?.author_email, user_email:user?.email};
      // If save blog match show one alert message otherwise add save blog
      if(blogUserMatch){
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
          title: 'You are authored you can not add save blog',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
          // post favorite blog send database
          if(user && user?.email){
              fetch(`${process.env.REACT_APP_API_URL}/save`,{
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
                      title: "Blog save successfully",
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
        <button onClick={()=>handleSaveBlog(saveBlog)} className={blogUserMatch ? "blog-favorite bg-blog-primary text-white":"blog-favorite"}>
            <FaBookmark className='text-xs'></FaBookmark>
        </button>
    </>
  )
}

export default BlogSave