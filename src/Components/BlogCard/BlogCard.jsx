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
    <div>
        <div className='container mx-auto px-5'>
            <div>
                <div>
                    <div>
                        <div className='rounded-2xl custom-shadow'>
                            <img className='w-full h-[250px] object-cover object-top rounded-t-md' src={img} alt="blog" />
                            <div className='p-4 rounded-b-md bg-white'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <Link className='text-xl font-medium text-black mb-2 block' to={"/blogs"}>I Love My Country</Link>
                                    </div>
                                    {/* Blog save and favorite button */}
                                    <div className='flex items-center gap-1'>
                                        {/* Favorite Blog button */}
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
                                <div className='mt-3'>
                                    <p className='blog-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nemo consectetur rem culpa a provident...</p>
                                </div>
                                {/* blog Read More btn */}
                                <div>
                                    <Link className='blog-btn' to={"/blog-details"}>Read More</Link>
                                </div>
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