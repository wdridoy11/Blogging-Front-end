import React from 'react'
import img from '../../Assets/Rectangle 1.png';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import BlogPostInfo from '../BlogPostInfo/BlogPostInfo';
import FavoriteBlog from '../FavoriteBlog/FavoriteBlog';
import BlogSave from '../BlogSave/BlogSave';
import BlogCard from '../BlogCard/BlogCard';
import SocialMedia from '../SocialMedia/SocialMedia';

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
                            <button className='text-xl bg-[#29c8e6] p-2 text-white rounded-md hover:bg-black duration-500'>
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
                                    <input type="submit" className='block text-white cursor-pointer bg-[#29c8e6] border-0 font-medium text-center px-7 py-2 rounded-full hover:bg-black hover:text-white duration-500' value="Submit" />
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
                    {/* Comment */}
                    <div className='mt-10'>
                        <h3>People Comment</h3>
                        <div className='w-full md:w-1/2 mt-5'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <img className='w-12 h-12 rounded-full object-cover' src={img} alt="" />
                                </div>
                                <div>
                                    <p className='text-base text-[#8799ad]'>Ridoy Sharif</p>
                                </div>
                            </div>
                            <div className='mt-3 bg-slate-100 p-3 rounded-md'>
                                <em className='text-base text-[#8799ad]'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero vel, fugiat quia odit optio quidem voluptas. Praesentium incidunt dolor unde."</em>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 mt-5'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <img className='w-12 h-12 rounded-full object-cover' src={img} alt="" />
                                </div>
                                <div>
                                    <p className='text-base text-[#8799ad]'>Ridoy Sharif</p>
                                </div>
                            </div>
                            <div className='mt-3 bg-slate-100 p-3 rounded-md'>
                                <em className='text-base text-[#8799ad]'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero vel, fugiat quia odit optio quidem voluptas. Praesentium incidunt dolor unde."</em>
                            </div>
                        </div>
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