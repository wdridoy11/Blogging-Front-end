import React from 'react'
import { Link } from 'react-router-dom'
import {FacebookShareButton, InstapaperShareButton, TwitterShareButton, LinkedinShareButton} from 'react-share';
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
const SocialMedia = () => {
  // const shareUrl = 'https://medium.com/@ara.moh3ni/a-step-by-step-guide-to-adding-social-share-buttons-to-your-next-js-d6cb8fa549eb';
  const shareUrl = window.location.href;
  // console.log(shareUrl)
  return (
    <>
        <div className='flex gap-2 mt-1'>
            
            <FacebookShareButton url={shareUrl}>
               <FaFacebookF size={42} className='social-blog-share-btn' />
            </FacebookShareButton>

            <InstapaperShareButton url={shareUrl}>
              <FaInstagram size={42} className='social-blog-share-btn' />
            </InstapaperShareButton>

            <TwitterShareButton url={shareUrl}>
              <FaTwitter size={42} className='social-blog-share-btn' />
            </TwitterShareButton>

            <LinkedinShareButton url={shareUrl}>
              <FaLinkedin size={42} className='social-blog-share-btn' />
            </LinkedinShareButton>

        </div>
    </>
  )
}

export default SocialMedia