import React from 'react'
import BlogCard from '../../Components/BlogCard/BlogCard'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import Categories from '../../Components/Categories/Categories'
import { Helmet } from 'react-helmet'

const Blogs = () => {
  return (
    <div className='py-20'>
        <Helmet><title> Blogs </title></Helmet>
        <div className='container mx-auto px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
                {/* blog list area */}
                <div className='col-span-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <BlogCard />
                    </div>
                </div>
                {/* category and filter area */}
                <div className='col-span-1'>
                    <div className='custom-shadow p-3'>
                        <div>
                            <div>
                                <div className='flex items-center justify-between bg-white rounded-r-md shadow-lg'>
                                    <div>
                                        <input type="search" name="blog-search" className='pl-4 py-2 rounded-l-md w-full outline-none' id="blog-search" placeholder='Search blog...' />
                                    </div>
                                    <div>
                                        <button className='bg-blog-primary text-white px-3 py-2.5 rounded-r-md hover:bg-black duration-500 cursor-pointer'>
                                            <FaSearch className='text-xl '></FaSearch>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Blog categories from components */}
                            <div className='mt-5'>
                                <h3 className='text-xl font-medium mb-4'>Blog Categories</h3>
                                <Categories />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs