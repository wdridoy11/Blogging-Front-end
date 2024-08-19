import React, { useState } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaCross } from 'react-icons/fa';
const Login = () => {
    let [isOpen, setIsOpen] = useState(true);

  return (
    <>
    <button onClick={() => setIsOpen(true)}>Open dialog</button>
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-md">
          <DialogTitle className="font-bold">Deactivate account</DialogTitle>
          <Description>This will permanently deactivate your account</Description>
          <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
          <div className="flex gap-4">
            <button onClick={() => setIsOpen(false)}>
               <FaCross />
            </button>
            <button onClick={() => setIsOpen(false)}>Deactivate</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </>
  )
}

export default Login