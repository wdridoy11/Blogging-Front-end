import React from 'react'
import { FaHeart, FaTrash} from 'react-icons/fa'
import Swal from 'sweetalert2'
import useBlog from '../../Hooks/useBlog'

const RemoveBlog = ({blog}) => {

  const [ refetch ] = useBlog();
  const url = window.location.pathname;
  const pathName = url.slice(11);

  // Dashboard save blog and favotite blog handle
  const handleBlogRemove=(id)=>{
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      // text: "You will delete your favorite blog",
      text: `You will delete your ${pathName} blog`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#29C8E6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result)=>{
      if(pathName === 'save'){
        if(result.isConfirmed){
          fetch(`${process.env.REACT_APP_API_URL}/save-blog/${id}`,{
            method:"DELETE",
            headers:{
              "content-type":"application/json"
            },
          })
          .then((res)=>res.json())
          .then((data)=>{
            console.log(data)
          })
        }
      }
      else if(pathName === 'favorite'){
        if(result.isConfirmed){
          fetch(`${process.env.REACT_APP_API_URL}/favorite-blog/${id}`,{
            method:"DELETE",
            headers:{
              "content-type":"application/json"
            }
          })
          .then((res)=>res.json())
          .then((data)=>{
            if(data.deletedCount>0){
              refetch();
              Swal.fire(
                'Deleted!',
                'Your favorite blog delete successful',
                'success'
              )
            }
            console.log(data)
          })
          .catch((err)=>{
            console.log(err.message)
          })
        }
      }
      // if(result.isConfirmed){
      //     fetch(`${process.env.REACT_APP_API_URL}/favorite-blog/${id}`,{
      //       method:"DELETE",
      //       headers:{
      //         "content-type":"application/json"
      //       }
      //     })
      //     .then((res)=>res.json())
      //     .then((data)=>{
      //       if(data.deletedCount>0){
      //         refetch();
      //         Swal.fire(
      //           'Deleted!',
      //           'Your favorite blog delete successful',
      //           'success'
      //         )
      //       }
      //       console.log(data)
      //     })
      //     .catch((err)=>{
      //       console.log(err.message)
      //     })
      // }

    })

  }

  return (
    <>
        <button onClick={()=>handleBlogRemove(blog._id)} className='blog-favorite bg-blog-primary text-white hover:bg-red-600 hover:border-red-600'>
            {/* <FaHeart className='text-xs'></FaHeart> */}
            <FaTrash className='text-lg' />
        </button>
    </>
  )
}

export default RemoveBlog