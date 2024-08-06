import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUserUsingEmail, userProfileUpdate} = useContext(AuthContext);
    const [confirmPasswordErro,setConfirmPasswordErro] = useState(false);
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm ();

    const onsubmit = (data) => {
        let firstName = data?.signUpFirstName;
        let lastName = data?.signUpLastName;
        let fullName = firstName + " " + lastName;
        let email = data?.signUpEmail;
        let password = data.signUpPassword;
        let confirmPassword = data.signUpConfirmPassword;
        // password and confirm password check and create an account
        if(password === confirmPassword){
            createUserUsingEmail(email,password)
            .then((res)=>{
                const user = res.user;
                userProfileUpdate(fullName,)
                .then((res)=>{
                    // user data send data base
                    const saveUser = {
                        firstName: firstName, 
                        lastName: lastName, 
                        email:email, 
                        image:user?.photoURL
                    };
                    fetch(`${process.env.REACT_APP_API_URL}/user`,{
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(saveUser)
                    })
                    .then((respons)=>respons.json())
                    .then((data)=>{
                        // if account created successfully then show one popup and redirect home page
                        if(data.insertedId){
                            Swal.fire({
                                title: "Congratulations!",
                                text: "Account created successful",
                                icon: "success"
                            });
                            
                            setTimeout(() => {
                                if(data.insertedId){
                                    navigate("/");
                                }
                            }, 2000);

                        }
                    })
                    .catch((err)=>{
                        console.log(err.message)
                    });
                })
                .catch((err)=>{
                    console.log(err.message)
                })
            })
            .catch((err)=>{
                console.log(err.message)
            })
        }else{
            setConfirmPasswordErro(!false);
        }
    }

  return (
    <div className='min-h-screen flex items-center dark-light-bg'>
        <div className='container'>
            <div>
                <div className='border w-full mx-auto md:w-3/5 p-5  md:p-10 rounded-xl'>
                    <h1 className='text-center mb-10 text-3xl'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <input 
                            type="text" 
                            name='signUpFirstName' 
                            id='signUpFirstName' 
                            {...register("signUpFirstName",{required: true})}
                            placeholder='First name'
                            className="input-field" 
                        />
                        {errors.signUpFirstName?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">First Name field is required</p>}
                        
                        <input 
                            type="text" 
                            name='signUpLastName' 
                            id='signUpLastName' 
                            {...register("signUpLastName",{required: true})}
                            placeholder='Last name'
                            className="input-field" 
                        />
                        {errors.signUpLastName?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Last Name field is required</p>}
                        
                        <input 
                            type="email" 
                            name='signUpEmail' 
                            id='signUpEmail' 
                            {...register("signUpEmail",{required: true})}
                            placeholder='Enter you email'
                            className="input-field" 
                        />
                        {errors.signUpEmail?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Email field is required</p>}
                        <input 
                            type="password" 
                            name='signUpPassword' 
                            id='signUpPassword' 
                            {...register("signUpPassword",{required: true})}
                            placeholder='Enter you password'
                            className="input-field" 
                        />
                        {errors.signUpPassword?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Password field is required</p>}
                        
                        <input 
                            type="password" 
                            name='signUpConfirmPassword' 
                            id='signUpConfirmPassword' 
                            {...register("signUpConfirmPassword",{required: true})}
                            placeholder='Confirm Password'
                            className="input-field" 
                        />
                        {confirmPasswordErro && <p className='text-red-600 pl-3 mt-1' role="alert">Password Not Match. Please try again</p>}
                       
                        {/* {errors.signUpConfirmPassword?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Password Not Match</p>} */}

                        <div className='mt-2'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" name="rememberMe" id="rememberMe" />
                                <label htmlFor="rememberMe" className='text-slate-500 dark:text-white'>Remember Me</label>
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