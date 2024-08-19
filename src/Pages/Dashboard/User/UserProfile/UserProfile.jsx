import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Providers/AuthProvider';

const UserProfile = () => {

  const {user} = useContext(AuthContext)
  const {register, handleSubmit, formState: {errors}} = useForm ();
  const onsubmit = (data) => {
    console.log(data)
  }
  console.log(user.displayName)
  

  return (
    <div>
        <div className='dashboard-details-area'>
            <div>
                <h1 className='mb-5'>Edit Profile</h1>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="blog_title" className='dark-light-text'>First Name</label>
                            <input 
                                type="text" 
                                name='user_first_name' 
                                id='user_first_name' 
                                {...register("user_first_name",{required: true})}
                                // placeholder="userfirst_name" 
                                value="Ridoy"
                                className="create-blog-input-field dark-light-text" 
                            />
                            {errors.user_first_name?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">First name is required</p>}
                        </div>
                        <div>
                            <label htmlFor="blog_title" className='dark-light-text'>Last Name</label>
                            <input 
                                type="text" 
                                name='user_last_name' 
                                id='user_last_name' 
                                {...register("user_last_name",{required: true})}
                                // placeholder="userfirst_name" 
                                value="Sharif"
                                className="create-blog-input-field dark-light-text" 
                            />
                            {errors.user_last_name?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Last name is required</p>}
                        </div>
                        <div>
                            <label htmlFor="blog_title" className='dark-light-text'>Email address</label>
                            <input 
                                type="text" 
                                name='user_email' 
                                id='user_email' 
                                {...register("user_email",{required: true})}
                                // placeholder="userfirst_name" 
                                value="ridoysharif@gmail.com"
                                className="create-blog-input-field dark-light-text" 
                            />
                            {errors.user_email?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">email is required</p>}
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserProfile