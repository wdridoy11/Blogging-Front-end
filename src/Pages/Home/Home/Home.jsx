import React from 'react'
import Subscribe from '../Subscribe/Subscribe'
import BlogCard from '../../../Components/BlogCard/BlogCard'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div className='py-16 dark-light-bg'>
      <Helmet><title>Home</title></Helmet>
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