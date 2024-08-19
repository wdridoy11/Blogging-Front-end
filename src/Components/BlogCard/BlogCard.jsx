import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BlogSave from '../BlogSave/BlogSave';
import RemoveBlog from '../RemoveBlog/RemoveBlog';
import BlogPostInfo from '../BlogPostInfo/BlogPostInfo';
import FavoriteBlog from '../FavoriteBlog/FavoriteBlog';

const BlogCard = ({blog}) => {
    const { _id, blog_title, blog_image, blog_description } = blog;
    // TODO: remove button
    const url = window.location.href;
    let remove ;
    if(url === 'http://localhost:3000/dashboard/favorite' || url === 'http://localhost:3000/dashboard/save'){
        remove = true;
    }else{
        remove = false;
    }

  return (
    <div>
        <div className='rounded-2xl custom-shadow' key={_id}>
            <div className='relative'>
                <img className='w-full h-[250px] object-cover object-top rounded-t-md' src={blog_image} alt="blog image" />
                {/* blog remove system only visible dashboard */}
                {remove ? <div className='absolute top-5 right-5'>
                    <RemoveBlog blog={blog} />
                </div>:""}
            </div>
            <div className='p-4 rounded-b-md dark-light-bg'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Link className='text-xl font-medium dark-light-text mb-2 block' to={"/blog-details"}>
                            {blog_title?.length > 33 ? <>{blog_title.slice(0,33)}...</> : blog_title }
                        </Link>
                    </div>
                    {/* Blog save and favorite button */}
                    <div className='flex items-center gap-1'>
                        {/* Favorite Blog button */}
                        <FavoriteBlog favoriteBlog={blog}  />
                        {/* Blog save Button */}
                        <BlogSave saveBlog={blog} />
                    </div>
                </div>
                {/* Blog post information */}
                <div>
                    <BlogPostInfo blogInfo={blog} />
                </div>
                {/* blog short description */}
                <div className='mt-3'>
                    <p className='blog-description'>
                        {blog_description?.length > 90 ? <>{blog_description.slice(0,90)}...</> : blog_description }
                    </p>
                </div>
                {/* blog Read More btn */}
                <div>
                    <Link className='blog-btn mt-2' to={`/blog-details/${_id}`}>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard