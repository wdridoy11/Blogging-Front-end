import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <>
        <div className='flex gap-2 mt-1'>
            <Link className='text-xl bg-[#29c8e6] p-2 text-white rounded-md hover:bg-black duration-500' to={``}><FaFacebookF /></Link>
            <Link className='text-xl bg-[#29c8e6] p-2 text-white rounded-md hover:bg-black duration-500' to={``}><FaInstagram /></Link>
            <Link className='text-xl bg-[#29c8e6] p-2 text-white rounded-md hover:bg-black duration-500' to={``}><FaTwitter /></Link>
            <Link className='text-xl bg-[#29c8e6] p-2 text-white rounded-md hover:bg-black duration-500' to={``}><FaLinkedin /></Link>
        </div>
    </>
  )
}

export default SocialMedia