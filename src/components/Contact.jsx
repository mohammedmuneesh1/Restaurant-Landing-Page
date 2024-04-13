import React from 'react'

export default function Contact() {
  return (
    <div className=' mt-8 md:mt-28 pb-4 flex flex-col items-center justify-center'>
        <h1 className='my-1 sm:my-2 md:my-3 max-w-600p text-gray-500 font-semibold tracking-normal sm:tracking-wide  text-3xl sm:text-4xl md:text-5xl lg:text-6xl '>Have Question In Mind?</h1>
        <h1 className='my-1 sm:my-2 md:my-3 max-w-600p text-gray-500  font-semibold  tracking-normal sm:tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl '>Let Us Help You</h1>
       
       
          
        <div className="mt-12 bg-transparent w-full px-2 py-8 mx-auto overflow-hidden shadow-2xl rounded-xl  lg:max-w-600p">
                <h1 className=" italic text-center text-xl font-medium text-gray-700 ">Contact form</h1>
                <p className="italic text-center  text-gray-700 ">
                    Ask us everything and we would love
                    to hear from you
                </p>

                <form className="mt-6 px-12 bg-transparent">
                  <div className='flex  flex-col sm:flex-row justify-between'>
                  <div className="">
                        <label className="block mb-1  text-sm text-gray-600 ">Full Name</label>
                        <input type="text" placeholder="John Doe" className="block w-full px-5 py-3  text-gray-700 bg-white border border-gray-200 rounded-md  focus:outline-none " />
                    </div>

                    <div className="">
                        <label className="block mb-1 text-sm text-gray-600 ">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3  text-gray-700 bg-white border outline-none " />
                    </div>
                  </div>
             

                    <div className="w-full mt-2">
                        <label className="block mb-1 text-sm text-gray-600 ">Message</label>
                        <textarea className="block w-full h-32 px-5 py-3  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-42  focus:outline-none " placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                        get in touch
                    </button>
                </form>
            </div>
          
        {/* <div className="bg-pink-400 mt-8 lg:w-1/2 lg:mx-6 ">
            <div className=" w-full px-4 py-8 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl  lg:max-w-md">
                <h1 className="text-xl font-medium text-gray-700 ">Contact form</h1>
                <p className="mt-2 text-gray-700 ">
                    Ask us everything and we would love
                    to hear from you
                </p>

                <form className="mt-6">
                    <div className="flex-1">
                        <label className="block mb-1 text-sm text-gray-600 ">Full Name</label>
                        <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:outline-none " />
                    </div>

                    <div className="flex-1 mt-2">
                        <label className="block mb-1 text-sm text-gray-600 ">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border outline-none " />
                    </div>

                    <div className="w-full mt-2">
                        <label className="block mb-2 text-sm text-gray-600 ">Message</label>
                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-42  focus:outline-none " placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                        get in touch
                    </button>
                </form>
            </div>
        </div> */}
        </div>

  )
}
