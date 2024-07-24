import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center'>
        <div className='container'>
            <div>
                <div className='border w-full mx-auto md:w-3/5 p-10 rounded-xl'>
                    <h1 className='text-center mb-10'>Login</h1>
                    <form>
                        <input type="email" name="login-email" className='input-field' id="login-email" placeholder='Enter your email' required/>
                        <input type="password" name="login-password" className='input-field' id="login-password" placeholder='Enter your password' required/>
                        <div className='flex justify-between items-center mt-7'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" name="remember-me" id="remember-me" />
                                <label htmlFor="remember-me" className='text-slate-500'>Remember Me</label>
                            </div>
                            <div>
                                <Link className="text-blog-primary">Forgot Password</Link>
                            </div>
                        </div>
                        <input type="submit" className='blog-btn w-full mt-5 py-3 text-lg font-medium' value="Login" />
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
                            <p className='text-lg text-slate-500'>Don't Have an account? <Link className="text-blog-primary" to="/sign-up"> Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login