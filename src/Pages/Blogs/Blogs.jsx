import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import useBlog from '../../Hooks/useBlog'
import BlogCard from '../../Components/BlogCard/BlogCard'
import Categories from '../../Components/Categories/Categories'

const Blogs = () => {

    const [blogs] = useBlog();

  return (
    <div className='pb-20 pt-5 dark:bg-slate-900'>
        <Helmet><title> Blogs </title></Helmet>
        <div className='container mx-auto px-5'>
            <div className='flex items-center gap-1 mb-2 text-[#8799ad] pb-3'>
                <Link className='hover:text-blog-primary duration-500' to={"/"}>Home</Link>
                <p className='text-sm'>/</p>
                <p>Blogs</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
                {/* blog list area */}
                <div className='col-span-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        {blogs?.map((blog)=><BlogCard key={blog._id} blog={blog} />)}
                    </div>
                </div>
                {/* category and filter area */}
                <div className='col-span-1'>
                    <div className='dark-light-border rounded-md p-3 dark-light-bg'>
                        <div>
                            <div>
                                <div className='flex items-center justify-between dark-light-bg rounded-r-md border border-slate-200 dark:border-slate-700'>
                                    <div>
                                        <input type="search" name="blog-search" className='pl-4 py-2 bg-transparent rounded-l-md w-full outline-none' id="blog-search" placeholder='Search blog...' />
                                    </div>
                                    <div>
                                        <button className='bg-blog-primary text-white px-3 py-3 rounded-r-md hover:bg-black hover:dark:bg-white hover:dark:text-blog-primary duration-500 cursor-pointer'>
                                            <FaSearch className='text-xl '></FaSearch>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Blog categories from components */}
                            <div className='mt-5'>
                                <h3 className='text-xl dark-light-text font-medium mb-4'>Blog Categories</h3>
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