import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <>
        <div className='flex gap-2 mt-1'>
            <Link className='social-media-icon' to={``}><FaFacebookF /></Link>
            <Link className='social-media-icon' to={``}><FaInstagram /></Link>
            <Link className='social-media-icon' to={``}><FaTwitter /></Link>
            <Link className='social-media-icon' to={``}><FaLinkedin /></Link>
        </div>
    </>
  )
}

export default SocialMedia