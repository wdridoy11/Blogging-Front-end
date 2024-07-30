import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaGithub, FaGoogle } from 'react-icons/fa'

const SignUp = () => {
  return (
    <div className='min-h-screen flex items-center dark-light-bg'>
        <div className='container'>
            <div>
                <div className='border w-full mx-auto md:w-3/5 p-5  md:p-10 rounded-xl'>
                    <h1 className='text-center mb-10 text-3xl'>Sign Up</h1>
                    <form>
                        <input type="text" name="sign-up-name" className='input-field' id="sign-up-name" placeholder='Enter your name' required/>
                        <input type="email" name="sign-up-email" className='input-field' id="sign-up-email" placeholder='Enter your email' required/>
                        <div className='relative'>
                            <input type="password" name="sign-up-password" className='input-field' id="sign-up-password" placeholder='Password' required/>
                            <button className='absolute right-5 bottom-7 dark-light-text'><FaEye /></button>
                        </div>
                        <div className='relative'>
                            <input type="password" name="sign-up-confirm-password" className='input-field' id="sign-up-confirm-password" placeholder='Confirm Password' required/>
                            <button className='absolute right-5 bottom-7 dark-light-text'><FaEye /></button>
                        </div>
                        <div className='mt-2'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" name="remember-me" id="remember-me" />
                                <label htmlFor="remember-me" className='text-slate-500 dark:text-white'>Remember Me</label>
                            </div>
                        </div>
                        <input type="submit" className='blog-btn w-full mt-5 py-3 text-lg font-medium' value="Sign Up" />
                    </form>
                    <div>
                        <div className='flex items-center justify-center gap-1.5 mt-8'>
                            <div>
                                <button className='social-auth'><FaGoogle className='text-2xl' /></button>
                            </div>
                            <div>
                                <button className='social-auth'><FaGithub className='text-2xl' /></button>
                            </div>
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-lg text-slate-500 dark:text-white'>Have an account? <Link className="text-blog-primary" to="/login">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp