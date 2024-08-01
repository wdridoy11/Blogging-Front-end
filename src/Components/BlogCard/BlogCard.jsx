import React from 'react'
import { Link } from 'react-router-dom';
import BlogSave from '../BlogSave/BlogSave';
import img from '../../Assets/Rectangle 1.png';
import RemoveBlog from '../RemoveBlog/RemoveBlog';
import BlogPostInfo from '../BlogPostInfo/BlogPostInfo';
import FavoriteBlog from '../FavoriteBlog/FavoriteBlog';

const BlogCard = ({blog}) => {
    // console.log(blog)
    const {
        _id,
        blog_like,
        blog_title,
        blog_image,
        author_name,
        author_image,
        author_email,
        blog_comment,
        blog_category,
        blog_post_date,
        blog_description,
        author_profile_link,
        } = blog;
    let remove = false;

  return (
    <div>
        <div className='rounded-2xl custom-shadow'>
            <div className='relative'>
                <img className='w-full h-[250px] object-cover object-top rounded-t-md' src={blog_image} alt="blog image" />
                {remove ? <div className='absolute top-5 right-5'>
                    <RemoveBlog />
                </div>:""}
            </div>
            <div className='p-4 rounded-b-md dark-light-bg'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Link className='text-xl font-medium dark-light-text mb-2 block' to={"/blog-details"}>
                            {blog_title?.length > 50 ? <>{blog_title.slice(0,50)}...</> : blog_title }
                        </Link>
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
                    <BlogPostInfo blogInfo={blog} />
                </div>
                {/* blog short description */}
                <div className='mt-3'>
                    <p className='blog-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nemo consectetur rem culpa a provident...</p>
                </div>
                {/* blog Read More btn */}
                <div>
                    <Link className='blog-btn mt-2' to={"/blog-details"}>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard