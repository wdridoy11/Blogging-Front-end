import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import { FaLinkedin } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import BlogPostInfo from '../BlogPostInfo/BlogPostInfo';
import FavoriteBlog from '../FavoriteBlog/FavoriteBlog';
import BlogSave from '../BlogSave/BlogSave';
import SocialMedia from '../SocialMedia/SocialMedia';
import BlogComment from '../BlogComment/BlogComment';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Login from '../Modal/Login';

const BlogDetails = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState();
    const {user} = useContext(AuthContext);
    const blogData = useLoaderData();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const { _id, blog_title, blog_image, blog_description, blog_category } = blogData;

    let date = new Date();

    // comment data get and blog id match
    const {refetch, data: comments = []} = useQuery({
        queryKey:["comments"],
        queryFn: async ()=>{
            const res = await axiosSecure(`/comment`);
            const userData = res.data;
            const userId = userData.filter((comment)=>comment.blog_id === _id);
            return userId;
        }
    })

    // user data get
    const {data: users = []} = useQuery({
        queryKey:["users"],
        queryFn: async ()=>{
            const res = await axiosSecure(`/users`);
            const userData = res.data;
            const userFind = userData.find((userInfo)=>userInfo.email === user.email)
            return userFind;
        }
    })

    const handleLike=()=>{
        const LikeInfo = {
            user_email:users?.email,
            blog_id:_id, 
            likeTime:new Date().toString(),
        }

       setIsOpen(true);
       setMessage("like");
        // if()
    }


    // handle user blog comment 
    const handleComment = (event) => {
        event.preventDefault();
        // blog data get
        let blogComment = event.target.blog_comment.value;
       if(user){
            const commentInfo = {   
                user_email:users?.email,
                user_firstName:users?.firstName, 
                user_LastName:users?.lastName,
                user_image_url:users?.image,
                blog_id:_id,
                blog_comment:blogComment
            }
            fetch(`${process.env.REACT_APP_API_URL}/comment`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(commentInfo)
            })
            .then((res)=>res.json())
            .then((data)=>{
                if(data.insertedId){
                    refetch();
                    // Login modal
                    setIsOpen(true);
                    setMessage("comment");
                  }
                event.target.reset();
            })
            .catch((err)=>console.log(err.message))
       }else{
            // login modal
            setIsOpen(true);
            setMessage("comment");
       }
   }

  return (
    <div className='pb-20 pt-5 dark-light-bg' key={_id}>
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
                    {/* <div>
                        <h1>{blog_title}</h1>
                        { blog_category.map((category)=><p>{category}</p>)}
                    </div> */}
                    {/* blog post information */}
                    <div className='flex gap-5 mt-2'>
                        {/* blog post info from conponents */}
                        <div>
                            <BlogPostInfo blogInfo={blogData} />
                        </div>
                        <div className='flex gap-2'>
                            <FavoriteBlog favoriteBlog={blogData}  />
                            <BlogSave saveBlog={blogData} />
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
                            <button onClick={handleLike} className='social-media-icon flex items-center gap-3 px-5'>
                                <AiFillLike /> 
                                <p>10</p>
                            </button>
                        </div>
                    </div>
                    {/* comment write*/}
                    <div className='mt-5'>
                        <div className='grid md:grid-cols-2 gap-10'>
                            <div>
                                <form onSubmit={handleComment} className='w-full'>
                                    <label htmlFor="blog_comment" className='text-lg block text-[#8799ad] dark:text-white'>Comment</label>
                                    <textarea 
                                        name="blog_comment" 
                                        className='w-full dark-light-border dark-light-bg p-3 dark-light-text rounded-md outline-none mt-2' 
                                        id="blog_comment" 
                                        cols="30" 
                                        rows="5" 
                                        placeholder='Write Comment...' 
                                        required>
                                    </textarea>
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
                        <BlogComment blogComment={comments} />
                        {/* <BlogComment blogComment={blogData} /> */}
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
        {/* without login popup */}
        <Login 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            message={message}
        />
    </div>
  )
}

export default BlogDetails