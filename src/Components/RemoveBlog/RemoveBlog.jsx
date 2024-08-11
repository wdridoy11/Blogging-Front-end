import React from 'react'
import { FaHeart, FaTrash} from 'react-icons/fa'
import Swal from 'sweetalert2'
import useBlog from '../../Hooks/useBlog'

const RemoveBlog = ({blog}) => {

  const [ refetch ] = useBlog();
  const url = window.location.pathname;
  const pathName = url.slice(11);

  // Dashboard save blog and favotite blog handle
  const handleBlogRemove=(blogInfo)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: `You will delete your ${pathName} blog`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#29C8E6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result)=>{
      // save blog remove
      if(pathName === 'save'){
        if(result.isConfirmed){
          fetch(`${process.env.REACT_APP_API_URL}/save-blog/${blogInfo._id}`,{
            method:"DELETE",
            headers:{
              "content-type":"application/json"
            },
          })
          .then((res)=>res.json())
          .then((data)=>{
              if(data.deletedCount>0){
                // refetch();
                Swal.fire(
                  'Deleted!',
                  'Your save blog delete successful',
                  'success'
                )
              }
          })
          .catch((err)=>{
            console.log(err.message)
          })
        }
      }
      // favorite blog delete
      else if(pathName === 'favorite'){
        if(result.isConfirmed){
          fetch(`${process.env.REACT_APP_API_URL}/favorite-blog/${blogInfo._id}`,{
            method:"DELETE",
            headers:{
              "content-type":"application/json"
            }
          })
          .then((res)=>res.json())
          .then((data)=>{
            if(data.deletedCount>0){
              // refetch();
              Swal.fire(
                'Deleted!',
                'Your favorite blog delete successful',
                'success'
              )
            }
          })
          .catch((err)=>{
            console.log(err.message)
          })
        }
      }

    })

  }

  return (
    <>
        <button onClick={()=>handleBlogRemove(blog)} className='blog-favorite bg-blog-primary text-white hover:bg-red-600 hover:border-red-600'>
            {/* <FaHeart className='text-xs'></FaHeart> */}
            <FaTrash className='text-lg' />
        </button>
    </>
  )
}

export default RemoveBlog