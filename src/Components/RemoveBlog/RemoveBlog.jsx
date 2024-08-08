import React from 'react'
import { FaHeart, FaTrash} from 'react-icons/fa'
import Swal from 'sweetalert2'

const RemoveBlog = ({blog}) => {

  const handleFavoriteRemove=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You will delete your favorite blog",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result)=>{
      if(result.isConfirmed){
          fetch(`${process.env.REACT_APP_API_URL}/favorite-blog/${id}`,{
            method:"DELETE",
            headers:{
              "content-type":"application/json"
            }
          })
          .then((res)=>res.json())
          .then((data)=>console.log(data))
      }
    })

  }

  return (
    <>
        <button onClick={()=>handleFavoriteRemove(blog._id)} className='blog-favorite bg-blog-primary text-white hover:bg-red-600 hover:border-red-600'>
            {/* <FaHeart className='text-xs'></FaHeart> */}
            <FaTrash className='text-lg' />
        </button>
    </>
  )
}

export default RemoveBlog