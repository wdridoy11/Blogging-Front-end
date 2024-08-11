import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../../../../Components/BlogCard/BlogCard'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Providers/AuthProvider';
import useBlog from '../../../../Hooks/useBlog';

const SaveBlog = () => {

  const {user} = useContext(AuthContext);
  const [blogs] = useBlog();
  const [axiosSecure] = useAxiosSecure();
  const [saveBlogFilter, setSaveBlogFilter] = useState([]);

  // data load api call using email
  const {refetch, data: saveBlog = [], isLoading} = useQuery({
    queryKey:["saveBlog"],
    queryFn: async ()=>{
        const res = await axiosSecure(`/save-blog?email=${user?.email}`);
        console.log(res.data)
        return res.data;
    }
  })

  useEffect(()=>{
      const blogFilter = blogs.filter((blog)=>{
        return saveBlog.filter((save)=>save.blog_id === blog._id)
      })
      setSaveBlogFilter(blogFilter);
  },[blogs, saveBlog])

  return (
    <div>
        <div className='dashboard-details-area'>
            <div>
                <h1>Save Blog</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8 max-h-[730px] overflow-auto blog-scroll-list'>
                    {saveBlogFilter?.map((blog)=><BlogCard key={blog._id} blog={blog} />)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaveBlog