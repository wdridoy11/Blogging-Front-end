import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import BlogSave from '../BlogSave/BlogSave';
import img from '../../Assets/Rectangle 1.png';
import Categories from '../Categories/Categories';
import BlogPostInfo from '../BlogPostInfo/BlogPostInfo';
import FavoriteBlog from '../FavoriteBlog/FavoriteBlog';

const BlogCard = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
                {/* blog list area */}
                <div className='col-span-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='rounded-2xl custom-shadow'>
                            <img className='w-full h-[250px] object-cover object-top rounded-t-md' src={img} alt="blog" />
                            <div className='p-4 rounded-b-md bg-white dark:bg-slate-900'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <Link className='text-xl font-medium text-black dark:text-white mb-2 block' to={"/blogs"}>I Love My Country</Link>
                                    </div>
                                    {/* Blog save and favorite button */}
                                    <div className='flex items-center gap-1'>
                                        {/* Favorite Blog save button */}
                                        <FavoriteBlog />
                                        {/* Blog save Button */}
                                        <BlogSave />
                                    </div>

                                </div>

                                {/* Blog post information */}
                                <div>
                                    <BlogPostInfo />
                                </div>

                                {/* blog short description */}
                                <div>
                                    <p className='text-base font-normal dark:text-[#8799ad] text-slate-700 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nemo consectetur rem culpa a provident...</p>
                                </div>
                                {/* blog Read More btn */}
                                <div>
                                    <Link className='text-white cursor-pointer inline-block bg-[#29c8e6] border-0 font-medium text-center px-7 mt-2 py-1.5 rounded-full hover:bg-black hover:dark:bg-white hover:dark:text-black hover:text-white duration-500'>Read More</Link>
                                </div>
                            </div>
                        </div>
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
                                        <button className='bg-[#29c8e6] text-white px-3 py-2.5 rounded-r-md hover:bg-black duration-500 cursor-pointer'>
                                            <FaSearch className='text-xl '></FaSearch>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* blog category */}
                            <div className='mt-5'>
                                <h3 className='text-xl font-medium mb-4'>Blog Categories</h3>
                                {/* blog category */}
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

export default BlogCard