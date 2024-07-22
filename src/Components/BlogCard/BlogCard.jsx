import React from 'react'
import img from '../../Assets/Rectangle 1.png'
import { Link } from 'react-router-dom';
import {FaBookmark, FaCalendarAlt, FaComment, FaHeart, FaSearch, FaUser,} from 'react-icons/fa';

const BlogCard = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
                {/* blog list area */}
                <div className='col-span-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='rounded-b-lg custom-shadow'>
                            <img className='w-full h-[250px] object-cover object-top rounded-t-md' src={img} alt="blog" />
                            <div className='p-4 rounded-b-md'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <Link className='text-xl font-medium text-black mb-2 block' to={"/blogs"}>I Love My Country</Link>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <button className='text-black border border-[#29c8e6] rounded-full hover:bg-[#29c8e6] hover:text-white duration-500 p-1.5'>
                                            <FaHeart className='text-xs'></FaHeart>
                                        </button>
                                        <button className='text-black border border-[#29c8e6] rounded-full hover:bg-[#29c8e6] hover:text-white duration-500 p-1.5'>
                                            <FaBookmark className='text-xs'></FaBookmark>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    {/* author name */}
                                    <Link className='text-[#29c8e6] hover:text-red-500 duration-500' to={""}>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <Link className='text-sm text-[#29c8e6]' to={``}><FaUser /></Link>
                                            </div>
                                            <div>
                                                <h5 className='text-sm'>John Deo</h5>
                                            </div>
                                        </div>
                                    </Link>
                                    {/* blog date */}
                                    <div className='flex items-center gap-1 text-[#8799ad]'>
                                        <div>
                                            <Link className='text-sm text-[#8799ad]' to={``}><FaCalendarAlt /></Link>
                                        </div>
                                        <div>
                                            <h5 className='text-sm'>7 March 2019</h5>
                                        </div>
                                    </div>
                                    {/* blog comment */}
                                    <div className='flex items-center gap-1 text-[#8799ad]'>
                                        <div>
                                            <Link className='text-sm text-[#8799ad]' to={``}><FaComment /></Link>
                                        </div>
                                        <div>
                                            <h5 className='text-sm'> <span>30</span> Comments</h5>
                                        </div>
                                    </div>
                                </div>
                                {/* blog short description */}
                                <div>
                                    <p className='text-base font-normal text-slate-700 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nemo consectetur rem culpa a provident...</p>
                                </div>
                                {/* blog Read More btn */}
                                <div>
                                    <Link className='text-white cursor-pointer inline-block bg-[#29c8e6] border-0 font-medium text-center px-7 mt-2 py-1.5 rounded-full hover:bg-black hover:text-white duration-500'>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* category and filter area */}
                <div className='col-span-1'>
                    <div className='shadow-lg p-3'>
                        <div>
                            <div>
                                <div className='flex items-center justify-between bg-white rounded-r-md shadow-lg'>
                                    <div>
                                        <input type="search" name="blog-search" className='pl-4 py-2 rounded-l-md w-full outline-none' id="blog-search" placeholder='Search blog...' />
                                    </div>
                                    <div>
                                        <button className='bg-[#29c8e6] text-white px-3 py-2.5 rounded-r-md hover:bg-black duration-500 cursor-pointer'>
                                            <FaSearch className='text-xl '></FaSearch>
                                        </button>
                                    </div>
                                    {/* <div className='bg-[#29c8e6] px-3 pt-3 pb-1 rounded-r-md hover:bg-black duration-500 cursor-pointer'>
                                       <button className='text-white'>
                                            <FaSearch className='text-xl '></FaSearch>
                                       </button>
                                    </div> */}
                                </div>
                            </div>
                            <div className='mt-5'>
                                <h3 className='text-xl font-medium mb-4'>Catrgory</h3>
                                <ul>
                                    <li className='my-2'><Link className='text-black hover:text-[#29c8e6] duration-500'>Freelancing</Link></li>
                                    <li className='my-2'><Link className='text-black hover:text-[#29c8e6] duration-500'>Web Design</Link></li>
                                    <li className='my-2'><Link className='text-black hover:text-[#29c8e6] duration-500'>Web Development</Link></li>
                                    <li className='my-2'><Link className='text-black hover:text-[#29c8e6] duration-500'>Software Development</Link></li>
                                    <li className='my-2'><Link className='text-black hover:text-[#29c8e6] duration-500'>Video Editing</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard