import React from 'react'
import img from '../../Assets/Rectangle 27.png';
import {FaUser,FaFacebookF, FaInstagram, FaLinkedin, FaTwitter,FaPhoneAlt, FaEnvelope, FaLaptopCode } from 'react-icons/fa';
import {FaBookmark, FaCalendarAlt, FaComment, FaHeart, FaSave, FaSearch,} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';
import BlogCard from '../BlogCard/BlogCard';

const AuthorProfile = () => {
  return (
    <div className='py-20 dark-light-bg'>
       <div className='max-w-[1700px] mx-auto px-5 md:px-10'>
            <div className='bg-blog-primary rounded-xl pt-10 h-[300px]'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14 -mt-20 px-5 md:px-10'>
                <div>
                    <div>
                        <img className='w-40 h-40 object-cover rounded-full' src={img} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl mt-5 dark-light-text'>Ridoy Sharif</h1>
                        <p className='text-base dark-light-text mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quod ea delectus suscipit doloremque atque voluptatibus dicta, at quisquam asperiores tempore fugit molestiae repudiandae accusamus laudantium quasi veritatis distinctio voluptas quas ducimus pariatur. Obcaecati ut aliquid illo quo autem. Et voluptas id maxime aut non molestias labore consequuntur suscipit perferendis corrupti ducimus explicabo cumque in accusantium iure eos qui omnis, nobis eveniet officiis quas! Reiciendis quidem debitis optio eum unde ut corrupti odio asperiores architecto vitae quia cupiditate itaque praesentium, rerum, perferendis aperiam. Et alias, doloribus expedita obcaecati, illo cum sunt velit molestiae aut excepturi consectetur facere odit, eveniet maiores!</p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='w-full md:w-1/2 md:absolute md:right-0 dark-light-border dark-light-bg p-5 rounded-lg'>
                        <div className='flex items-center gap-4 border-b dark:border-slate-700 py-2'>
                            <div className='text-white border bg-blog-primary rounded-full p-2'>
                                <FaUser className='text-base'></FaUser>
                            </div>
                            <p className='text-base dark-light-text'>Ridoy Sharif</p>
                        </div>
                        <div className='flex items-center gap-4 border-b dark:border-slate-700 py-2'>
                            <div className='text-white border bg-blog-primary rounded-full p-2'>
                                <FaLaptopCode className='text-base'></FaLaptopCode>
                            </div>
                            <p className='text-base dark-light-text'>Web Developer</p>
                        </div>
                        <div className='flex items-center gap-4 border-b dark:border-slate-700 py-2'>
                            <div className='text-white border bg-blog-primary rounded-full p-2'>
                                <FaEnvelope className='text-base'></FaEnvelope>
                            </div>
                            <p className='text-base dark-light-text'>ridoysharif11@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-4 border-b dark:border-slate-700 py-2'>
                            <div className='text-white border bg-blog-primary rounded-full p-2'>
                                <FaPhoneAlt className='text-base'></FaPhoneAlt>
                            </div>
                            <p className='text-base dark-light-text'>01722824160</p>
                        </div>
                        <div className='mt-3'>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <div>
                    <h1 class="text-2xl font-semibold mb-7 dark-light-text">All Blog</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    <BlogCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthorProfile