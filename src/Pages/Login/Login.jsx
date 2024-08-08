import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaGithub, FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../Providers/AuthProvider'

const Login = () => {

    const {userSignIn} = useContext(AuthContext);

    const handleLogin =(event)=>{
        event.preventDefault();
        let email = event.target.login_email.value;
        let password = event.target.login_password.value;
        userSignIn(email, password)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }


  return (
    <div className='min-h-screen flex items-center dark-light-bg'>
        <div className='container'>
            <div>
                <div className='border w-full mx-auto md:w-3/5 p-5  md:p-10 rounded-xl'>
                    <h1 className='text-center mb-10 text-3xl'>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input type="email" name="login_email" className='input-field' id="login_email" placeholder='Enter your email' required/>
                        <div className='relative'>
                            <input type="password" name="login_password" className='input-field' id="login_password" placeholder='Enter your password' required/>
                            <button className='absolute right-5 bottom-7 dark-light-text'><FaEye /></button>
                        </div>
                        <div className='flex justify-between items-center mt-7'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" name="remember-me" id="remember-me" />
                                <label htmlFor="remember-me" className='text-slate-500 dark:text-white'>Remember Me</label>
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
                            <p className='text-lg text-slate-500 dark:text-white'>Don't Have an account? <Link className="text-blog-primary" to="/sign-up"> Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login