import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Link } from 'react-router-dom';

const Login = ({isOpen, setIsOpen, message}) => {
    // let [isOpen, setIsOpen] = useState(true);
    // let message = "favorites"
  return (
    <>
    {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-md">
        <DialogPanel className="max-w-lg space-y-4 border border-[#29C8E6] bg-white p-12 rounded-md duration-500 relative  ">
        {/* <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 relative"> */}
          <DialogTitle className="font-bold  text-2xl">Log in to continue</DialogTitle>
          <Description>You can not {message} without login</Description>
          <div>
            <button onClick={() => setIsOpen(false)}>
               <MdOutlineCancel className='absolute top-3 right-3 text-3xl text-blog-primary'  />
            </button>
            <Link className='blog-btn rounded-md' to={'/login'}>Login</Link>
            <button className='blog-btn bg-red-500 border-none rounded-md ml-2' onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </>
  )
}

export default Login