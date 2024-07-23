import React from 'react'
import BlogCard from '../../../../Components/BlogCard/BlogCard'

const SaveBlog = () => {
  return (
    <div>
        <div className='bg-slate-100  p-10 rounded-lg list'>
            <div>
                <h1>Save Blog</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8'>
                  <BlogCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaveBlog