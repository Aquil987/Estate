import React from 'react'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div className='flex flex-col justify-center items-center container mx-auto p-14 md:px-20 lg:px-32  w-full  overflow-hidden ' id='About'>
        <h1 className='text-2xl sm:text-4xl mb-2 font-bold'>About <span className='font-light underline underline-offset-4 decoration-1 under '>Our Projects</span></h1>
        <p className='text-gray-500 max-w-80 mb-8 text-center'>Passionate about properties, Dedicated to your vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
          <img src={assets.brand_img} alt="brand_img" className='w-full sm:w-1/2 max-w-lg' />
          <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28  '>  
              {/* 2xl:pr-28 2xl for large screen size, padding right 28 px */}
               <div >
                <p className='text-4xl font-medium text-gray-800'>10+</p>
                <p>Years of Excellence</p>
               </div>
               <div >
                <p className='text-4xl font-medium text-gray-800'>12+</p>
                <p>Projects Completed</p>
               </div>
               <div >
                <p className='text-4xl font-medium text-gray-800'>20+</p>
                <p>Mn. Sq. Ft. Delivered</p>
               </div>
               <div >
                <p className='text-4xl font-medium text-gray-800'>25+</p>
                <p>Ongoing Projects </p>
               </div>

            </div>
            <p className='my-10 max-w-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, veritatis vitae consequatur doloribus accusantium accusamus repellat perferendis tempora ut, architecto, mollitia suscipit laboriosam nam animi? Asperiores inventore dolorum magni. Dolorem sunt aut nemo nulla voluptas vitae corrupti dicta, placeat est?
            </p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
          </div>
        </div>
    </div>
  )
}

export default About