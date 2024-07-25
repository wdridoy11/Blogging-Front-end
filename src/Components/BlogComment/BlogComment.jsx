import React from 'react'
import img from '../../Assets/Rectangle 27.png';
const BlogComment = () => {
  return (
    <div>
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
  )
}

export default BlogComment