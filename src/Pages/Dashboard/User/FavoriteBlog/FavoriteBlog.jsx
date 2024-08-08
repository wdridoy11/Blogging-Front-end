import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../../../../Components/BlogCard/BlogCard'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useBlog from '../../../../Hooks/useBlog';

const FavoriteBlog = () => {

    const {user} = useContext(AuthContext);
    const [blogs] = useBlog();
    const [axiosSecure] = useAxiosSecure();
    const [filterBlogs, setFilterBlogs] = useState([]);

    const {refetch, data: favoriteBlog = [], isLoading} = useQuery({
        queryKey:["favoriteBlog"],
        queryFn: async ()=>{
            const res = await axiosSecure(`/favorite-blog?email=${user?.email}`);
            return res.data;
        }
    })

    // blogs data and favorite data id match and return data
    useEffect(()=>{
        const blogFilter = blogs.filter((blog)=>{
           return favoriteBlog.filter((fav)=>fav.blog_id === blog._id);
        })
        setFilterBlogs(blogFilter);
    },[blogs, favoriteBlog])

  return (
    <div>
        <div className='dashboard-details-area'>
            <div>
                <h1>Favorite Blog</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8 max-h-[730px] overflow-auto blog-scroll-list'>
                    {filterBlogs?.map((blog)=><BlogCard key={blog._id} blog={blog} />)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavoriteBlog