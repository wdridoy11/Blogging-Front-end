import React from 'react'
import Subscribe from '../Subscribe/Subscribe'
import BlogCard from '../../../Components/BlogCard/BlogCard'

const Home = () => {
  return (
    <div className='py-16'>
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
        <Subscribe />
    </div>
  )
}

export default Home