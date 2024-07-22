import React from 'react'

const Subscribe = () => {


    const handleSubscribeEmail=(event)=>{
        event.preventDefault();
        console.log("Hello Subscribe!",event.target.value)
    }

  return (
    <div className='container mx-auto px-5 my-20'>
        <div className='bg-[#29c8e6] py-20 rounded-xl px-5'>
            <div>
                <div className="flex flex-col items-center justify-between md:flex-row">
                   <div className="w-full lg:w-1/2">
                      <h1 className="text-white font-bold text-3xl mb-6">Subscribe Our Newsletter</h1>
                      <p className="my-6 text-base text-white font-normal w-full lg:w-9/12">
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed tenetur fuga non nam esse veniam.
                      </p>
                   </div>
                   <div className="w-full lg:w-1/2">
                      <form onSubmit={handleSubscribeEmail}>
                            <input type="email" name="email" className="py-4 rounded-l-md w-3/5 px-8 text-lg outline-none" id="email" placeholder="Your email address" />
                            <input type="submit" className="bg-black cursor-pointer text-white ml-0 mt-3 lg:mt-0 lg:-ml-2 py-4 px-8 
                            border-0 rounded-lg text-lg font-medium hover:bg-black transition duration-150" value="Subscribe" />
                      </form>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe