import React from 'react'
import BlogCard from '../../../../Components/BlogCard/BlogCard'

const AllBlogs = () => {
  return (
    <div>
        <div className='dashboard-details-area'>
            <div>
                <h1>All Blogs</h1>
                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8'>
                       <BlogCard />
                       <BlogCard />
                       <BlogCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllBlogs