import React from 'react'

const BlogComment = ({blogComment}) => {

  return (
    <div>
        <h3 className='dark-light-text'>People Comment</h3>
        <div className='w-full md:w-1/2 mt-5'>
            {
                blogComment?.map((comment)=><>
                <div className='mt-5'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <img className='w-12 h-12 rounded-full object-cover' src={comment.user_image_url} alt="" />
                        </div>
                        <div>
                            <p className='text-base text-[#8799ad] dark:text-white'>{comment.user_firstName}</p>
                        </div>
                    </div>
                    <div className='mt-3 bg-slate-100 dark:bg-slate-800 p-3 rounded-md'>
                        <em className='text-base text-[#8799ad]'>{comment.blog_comment}</em>
                    </div>
                </div>
                </>)
            }
        </div>
    </div>
  )
}

export default BlogComment