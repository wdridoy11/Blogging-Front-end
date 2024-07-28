import React from 'react'

const AdminProfile = () => {
  return (
    <div>
        <div className='dashboard-details-area'>
            <div>
                <h1>Edit Profile</h1>
                <div className='mt-5'>
                    <div>
                        <form>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="admin_name" className='text-black block'>Name</label>
                                    <input type="text" name='admin_name' className='input-field mt-1' id='admin_name' value="Ridoy sharif" />
                                </div>
                                <div>
                                    <label htmlFor="admin_name" className='text-black block'>Email</label>
                                    <input type="text" name='admin_name' className='input-field mt-1' id='admin_name' value="ridoysharifbrmsrs@gmail.com" />
                                </div>
                                {/* <div>
                                    <label htmlFor="about_info" className='text-black block'>About yourself</label>
                                    <textarea name="about_info" className='input-field mt-1' id="about_info" cols="30" rows="7"></textarea>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminProfile