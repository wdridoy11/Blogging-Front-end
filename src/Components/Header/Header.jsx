import React, { useContext } from 'react'
import { FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import img from '../../Assets/Rectangle 27.png';
import { AuthContext } from '../../Providers/AuthProvider';


const Header = () => {

    const {user,userSignOut} = useContext(AuthContext);
    // userLogOut
    const userLogOut = ()=>{
        userSignOut()
        .then((result)=>{
            const user = result.user;
            console.log(user)
        })
        .catch((error)=>{
          console.log(error.message)
        })
    }
    // dark and light mode handle
    const toggleDarkMode = () =>{
        if(localStorage.theme === undefined){
            localStorage.theme = 'dark';
        }
        localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
        if(localStorage.theme ==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }


  return (
    <div className='bg-slate-200 py-3 dark:bg-slate-800'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div>

                    <div>
                        <button className='dark:text-white' onClick={toggleDarkMode}><FaSun></FaSun></button>
                        {/* <button id='darkToggle'><FaSun></FaSun></button> */}
                    </div>

                </div>
                <div className='flex items-center gap-5'>
                    <Link className='text-base font-medium dark:text-white' to={"/"}>Home</Link>
                    <Link className='text-base font-medium dark:text-white' to={"/blogs"}>Blogs</Link>
                    {user ? 
                        <Link className='blog-btn' onClick={userLogOut}>LogOut</Link>
                        :
                        <Link className='blog-btn' to={"/login"}>login</Link>
                    }

                    <Link to={"/dashboard"}>
                        <img className='w-10 h-10 rounded-full object-cover' src={img} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header