import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="py-20 bg-black">
           <div className="container mx-auto px-5 md:px-10 lg:px-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
                 <div>
                    <img src="./images/logo.png" alt="Footer logo" />
                    <p className="my-6 text-base text-slate-400 font-normal">
                       Increse your knowledge and developer more experience.
                    </p>
                    <div>
                        <SocialMedia />
                    </div>
                 </div>
                 <div>
                    <h3 className="text-white font-medium mb-6">Category</h3>
                    <Link className='text-slate-400 block mb-2'>Freelancing</Link>
                    <Link className='text-slate-400 block mb-2'>Web Design</Link>
                    <Link className='text-slate-400 block mb-2'>Web Development</Link>
                    <Link className='text-slate-400 block mb-2'>Software Development</Link>
                 </div>
                 <div>
                 <h3 className="text-white font-medium mb-6">Blog</h3>
                    <Link className='text-slate-400 block mb-2'>I Love My Country</Link>
                    <Link className='text-slate-400 block mb-2'>Improve Skills</Link>
                    <Link className='text-slate-400 block mb-2'>Increase Knowledge</Link>
                 </div>
                 <div>
                     <h3 className="text-white font-medium mb-6">Subscribe Us!</h3>
                     <div>
                        <form>
                            <input type="email" name="email" className="py-3 rounded-md w-full px-4 text-lg outline-none" id="email" placeholder="Your email address" />
                            <input type="submit" className="blog-btn rounded-md py-3" value="Subscribe" />
                         </form>
                     </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="text-center bg-red-500 py-5">
           <p className="text-white">&copy; Copyright 2022 | All Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer