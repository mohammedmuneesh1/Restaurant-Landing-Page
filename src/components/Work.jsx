import React from 'react'
import { workInfoData } from '../Assets/ApplicationData'

export default function Work() {
  return (
    <div className='mt-16 sm:mt-36 md:mt-44 lg:mt-48  pb-4'>
        <div id="work-text-container" className=' flex flex-col justify-center items-center'>
        <h2 className='font-bold text-xl mb-2 sm:mb-4  sm:text-2xl text-orange-400 tracking-normal sm:tracking-wider '>Work</h2>
        <h1 className='text-gray-500  font-extrabold  tracking-normal sm:tracking-wider text-3xl sm:text-5xl md:text-6xl '>How It Works</h1>
        <p className=' text-gray-500  text-justify max-w-2xl my-3 sm:my-6  tracking-normal sm:tracking-wider text- sm:text-xl md:text-2xl '>Welcome to [Restaurant Name]! Our passionate chefs carefully select fresh ingredients to craft mouthwatering dishes, while our friendly staff provides attentive service to ensure a delightful dining experience. Join us and savor the magic of exceptional cuisine in a welcoming atmosphere.</p>
        </div> 
        <div id='work-icons' className=' flex flex-row mt-4 sm:mt-12 justify-center items-center flex-wrap'>
           {workInfoData.map((value,index)=>(
            
                    <div className='bg-white  w-w290 min-h-85   my-4 mx-8  py-4 px-5 flex flex-col  items-center text-justify  rounded-2xl'>
                    <img src={value.imageUrl}  alt='meal background'/>
                    <h2 className='text-gray-500 text-xl my-4 font-normal  sm:font-bold tracking-normal sm:tracking-wide '>{value.title}</h2>
                    <p className='text-gray-700'>{value.text}</p>
                </div>
           ))}
        </div>
    </div>
  )
}


