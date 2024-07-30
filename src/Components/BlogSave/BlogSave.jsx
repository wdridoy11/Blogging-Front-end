import React, { useState } from 'react'
import {FaBookmark} from 'react-icons/fa';

const BlogSave = () => {

  const [isSave,setIsSave] = useState(false);
  const handleSaveBlog=()=>{
    if(!isSave){
      setIsSave(true);
    }else{
      setIsSave(false);
    }
  }

  return (
    <>
        <button onClick={handleSaveBlog} className={isSave ? "blog-favorite bg-blog-primary text-white":"blog-favorite"}>
            <FaBookmark className='text-xs'></FaBookmark>
        </button>
    </>
  )
}

export default BlogSave