import React from 'react'
import img from '../../Assets/Rectangle 1.png';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import BlogPostInfo from '../BlogPostInfo/BlogPostInfo';
import FavoriteBlog from '../FavoriteBlog/FavoriteBlog';
import BlogSave from '../BlogSave/BlogSave';
import BlogCard from '../BlogCard/BlogCard';
import SocialMedia from '../SocialMedia/SocialMedia';
import BlogComment from '../BlogComment/BlogComment';

const BlogDetails = () => {
  return (
    <div className='py-20'>
        <div className='max-w-[1700px] mx-auto px-5'>
            <div className='mb-14'>
                <img className='w-full h-[600px] object-cover object-center rounded-2xl' src={img} alt="Blog image" />
            </div>
            <div className='container mx-auto'>
                <div>
                    <div>
                        <h1>I Love My Country</h1>
                    </div>
                    {/* blog post information */}
                    <div className='flex gap-5 mt-2'>
                        {/* blog post info from conponents */}
                        <div>
                            <BlogPostInfo />
                        </div>
                        <div className='flex gap-2'>
                            <FavoriteBlog />
                            <BlogSave />
                        </div>
                    </div>

                    {/* blog description */}
                    <div className='mt-10'>
                        <p className='text-base mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.</p>
                        <p className='text-base mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.</p>
                        <p className='text-base mb-3'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat. 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                            <br/><br/>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur cupiditate officia quaerat incidunt placeat atque totam dicta fugit ipsam, iste eaque veniam quae distinctio, tempora, impedit autem alias repellat.
                        </p>
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
                                <form className='w-full'>
                                    <label htmlFor="blog-comment" className='text-base block text-[#8799ad]'>Comment</label>
                                    <textarea name="blog-comment" className='w-full border p-3 rounded-md outline-none' id="blog-comment" cols="30" rows="5" placeholder='Write Comment...'></textarea>
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
                        <BlogComment />
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
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BlogDetails