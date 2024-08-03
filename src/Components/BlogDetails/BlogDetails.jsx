import React from 'react'
import img from '../../Assets/Rectangle 1.png';
import { Link, useLoaderData } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import BlogPostInfo from '../BlogPostInfo/BlogPostInfo';
import FavoriteBlog from '../FavoriteBlog/FavoriteBlog';
import BlogSave from '../BlogSave/BlogSave';
import SocialMedia from '../SocialMedia/SocialMedia';
import BlogComment from '../BlogComment/BlogComment';

const BlogDetails = () => {

    const blogData = useLoaderData();
    const { _id, blog_title, blog_image, blog_description, blog_category } = blogData;

   const handleComment = (event) => {
        event.preventDefault();
        let blogComment = event.target.blog_comment.value;
        console.log(blogComment);
   }

  return (
    <div className='pb-20 pt-5 dark-light-bg'>
        <div className='max-w-[1700px] mx-auto px-5'>
            <div className='flex items-center gap-1 mb-2 text-[#8799ad] pb-3'>
                <Link className='hover:text-blog-primary duration-500' to={"/"}>Home</Link>
                <p className='text-sm'>/</p>
                <Link className='hover:text-blog-primary duration-500' to={"/blogs"}>Blogs</Link>
                <p className='text-sm'>/</p>
                <p>{blog_title}</p>
            </div>
            <div className='mb-14'>
                <img className='w-full h-[600px] object-cover object-center rounded-2xl' src={blog_image} alt="Blog image" />
            </div>
            <div className='container mx-auto'>
                <div>
                    <div>
                        <h1>{blog_title}</h1>
                        { blog_category.map((category)=><p>{category}</p>)}
                    </div>
                    {/* blog post information */}
                    <div className='flex gap-5 mt-2'>
                        {/* blog post info from conponents */}
                        <div>
                            <BlogPostInfo blogInfo={blogData} />
                        </div>
                        <div className='flex gap-2'>
                            <FavoriteBlog favoriteBlog={blogData}  />
                            <BlogSave />
                        </div>
                    </div>

                    {/* blog description */}
                    <div className='mt-10'>
                        <p className='dark-light-text'>{blog_description}</p>
                    </div>
                </div>

                <div className='mt-10'>
                    {/* share */}
                    <div>
                        <h3>Like Blog</h3>
                        <div>
                            <button className='social-media-icon'>
                                <FaLinkedin></FaLinkedin>
                            </button>
                        </div>
                    </div>
                    {/* comment write*/}
                    <div className='mt-5'>
                        <div className='grid md:grid-cols-2 gap-10'>
                            <div>
                                <form onSubmit={handleComment} className='w-full'>
                                    <label htmlFor="blog_comment" className='text-lg block text-[#8799ad] dark:text-white'>Comment</label>
                                    <textarea name="blog_comment" className='w-full dark-light-border dark-light-bg p-3 rounded-md outline-none mt-2' id="blog_comment" cols="30" rows="5" placeholder='Write Comment...'></textarea>
                                    <input type="submit" className='blog-btn' value="Submit" />
                                </form>
                            </div>

                            {/* Social media share */}
                            <div className='mt-24'>
                                <h3>Share Blog</h3>
                                <div>
                                   <SocialMedia />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Prople Comment */}
                    <div className='mt-10'>
                        <BlogComment blogComment={blogData} />
                    </div>
                </div>
            </div>

            {/* Related Blog */}
            <div className='py-20'>
                <div>
                    <h1>Related Blog</h1>
                </div>
                <div className='mt-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                        {/* <BlogCard />
                        <BlogCard />
                        <BlogCard /> */}
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BlogDetails