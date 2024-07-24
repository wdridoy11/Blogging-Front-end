import React from 'react'
import { useForm } from 'react-hook-form'

const CreateBlog = () => {


  const {register, handleSubmit, formState: {errors}} = useForm ();


  return (
    <div>
        <div className='dashboard-details-area'>
            <div>
                <h1>Create Blog</h1>
                <div className='mt-7'>
                    <div>
                         <form onSubmit={handleSubmit(onsubmit)}>
                              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                  <div>
                                      <label htmlFor="blog_title" className='text-black'>Blog Title</label>
                                      <input 
                                          type="text" 
                                          name='blog_title' 
                                          id='blog_title' 
                                          {...register("blog_title",{required: true})}
                                          placeholder="Blog Title" 
                                          className="create-blog-input-field" 
                                      />
                                      {errors.blog_title?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Blog title field is required</p>}
                                      {/* <input type="text" name='blog-title' className='create-blog-input-field' id='blog-title' placeholder='Blog Title' required/> */}
                                  </div>
                                  <div>
                                      <label htmlFor="blog-category" className='text-black'>Blog Category</label>
                                      <select name="blog-category" id="blog-category"  className='create-blog-input-field' required>
                                          <option className='py-2 block text-base text-[#8799ad]' value="">Web Design</option>
                                          <option className='py-2 block text-base text-[#8799ad]' value="">Web Development</option>
                                      </select>
                                  </div>
                                  <div>
                                      <label htmlFor="blog_post_date" className='text-black'>Blog Date</label>
                                      <input 
                                          type="date" 
                                          name='blog_post_date' 
                                          id='blog_post_date' 
                                          {...register("blog_post_date",{required: true})}
                                          className="create-blog-input-field" 
                                      />
                                      {errors.blog_post_date?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Blog Date field is required</p>}
                                  </div>
                                  <div>
                                      <label htmlFor="author_name" className='text-black'>Author Name</label>
                                      <input 
                                          type="text" 
                                          name='author_name' 
                                          id='author_name' 
                                          {...register("author_name",{required: true})}
                                          value="Ridoy Sharif" 
                                          className="create-blog-input-field bg-slate-300 cursor-not-allowed' id='blog-author-name" 
                                      />
                                      {errors.author_name?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Blog Date field is required</p>}
                                      {/* <input type="text" name="blog-author-name" className='create-blog-input-field bg-slate-300 cursor-not-allowed' id='blog-author-name' value="Ridoy" readOnly /> */}
                                  </div>
                                  <div>
                                      <label htmlFor="author_email" className='text-black'>Author Name</label>
                                      <input 
                                          type="email" 
                                          name='author_email' 
                                          id='author_email' 
                                          {...register("author_email",{required: true})}
                                          value="ridoysharifbrmsrs@gmail.com" 
                                          className="create-blog-input-field bg-slate-300 cursor-not-allowed' id='blog-author-name" 
                                      />
                                      {/* <input type="email" name="blog-author-email" className='create-blog-input-field bg-slate-300 cursor-not-allowed' id='blog-author-email' value="ridoysharif@gmail.com" readOnly /> */}
                                  </div>
                              </div>
                         </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateBlog