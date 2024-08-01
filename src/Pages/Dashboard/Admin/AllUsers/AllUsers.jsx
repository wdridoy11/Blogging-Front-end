import React from 'react'
import img from '../../../../Assets/Rectangle 27.png';
const AllUsers = () => {
  return (
    <div>
        <div className='dashboard-details-area'>
            <div>
                <h1>All Users</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-8'>
                <div className='dark-light-border'>
                    <div className=''>
                        <img className='w-20 h-20 object-cover rounded-full mx-auto' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllUsers