import React from 'react'

const CreateCategory = () => {


    const createCategory = (event) =>{
        event.preventDefault();
        let categoryName = event.target.category_name.value;
        let parentCategory = event.target.parent_category.value;
        console.log(categoryName)
        console.log(parentCategory)
    }


  return (
    <div>
        <div className='dashboard-details-area'>
            <div>
                <h1>Create Category</h1>
                <div className='mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        <div className='col-span-1'>
                            <div>
                                <form onSubmit={createCategory}>
                                    <div>
                                        <label htmlFor="category_name" className='text-black'>Name</label>
                                        <input type="text" name='category_name' className='w-full border p-3 rounded-md outline-none' id='category_name' placeholder='Enter Category name' required/>
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor="parent-category" className='text-black block'>Parent Category</label>
                                        <select name="parent_category" id="parent_category"  className='border mt-1 w-full p-3 rounded-md outline-none text-base text-black'>
                                            <option className='py-2 block text-base text-black' value="none">None</option>
                                            <option className='py-2 block text-base text-black' value="Web Design">Web Design</option>
                                            <option className='py-2 block text-base text-black' value="Web Development">Web Development</option>
                                            <option className='py-2 block text-base text-black' value="Software Development<">Software Development</option>
                                            <option className='py-2 block text-base text-black' value="Graphic Design">Graphic Design</option>
                                            <option className='py-2 block text-base text-black' value="Video Edting">Video Edting</option>
                                        </select>
                                    </div>
                                    <div className='mt-5'>
                                        <input type="submit" className='block text-white cursor-pointer bg-[#29c8e6] border-0 font-medium text-center px-7 py-2 rounded-full hover:bg-black hover:text-white duration-500' value="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='h-[400px] overflow-x-auto bg-white'>
                                <table className='w-full border'>
                                    <thead className='bg-[#29c8e6]'>
                                        <tr className='text-white'>
                                            <th className='text-start p-2'>Name</th>
                                            <th className='text-start p-2'>Count</th>
                                            <th className='text-start p-2'>Blog</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>
                                        <tr>
                                            <th className='border text-start p-2 font-normal'>Web Development</th>
                                            <th className='border text-start p-2 font-normal'>10</th>
                                            <th className='border text-start p-2 font-normal'>I Love my Country</th>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateCategory