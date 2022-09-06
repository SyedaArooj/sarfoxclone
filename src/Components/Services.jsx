import React from 'react'
import lock from './images/services-1.png'
import lock2 from './images/services-2.png'
import lock3 from './images/services-3.png'


export default function Services() {
  return (
    <div className='pt-32 srvcbg'>
        <p className='bg-blue-100 text-blue-600 text-center  w-32 h-9 ml-[48%] rounded-full py-1 font-semibold'>Best Services</p>
        <h1 className='font-bold text-4xl text-center mt-4 '>Continuously We Offer The Best <br /> Services For Progress!</h1>

       <div className='grid grid-cols-3 pt-16 mt-10 gap-8 p-20  '>

        <div className='col-span-1 hover:bg-gradient-to-r from-blue-800 to-blue-500 cardbg hover:text-white'>
         <img src={lock} alt="" className='bg-white h-24 w-24 rounded-full p-4 ml-[12%] mt-12 mb-8' />
         <h1 className='text-2xl font-bold ml-8'>Cyber Security</h1>
         <p className='mt-4 ml-8 text-lg text-gray-800'>Phasellus aliquam fermentum tincidunt. <br /> Duis accumsan,</p>
         <hr  className='mt-6 mb-6 ml-8 w-[315px]'/>
        <p className='ml-8 mb-8 font-semibold  text-lg'>Read More</p>
        </div>

        <div className='col-span-1 hover:bg-gradient-to-r from-blue-800 to-blue-500 cardbg hover:text-white'>
         <img src={lock2} alt="" className='bg-white h-24 w-24 rounded-full p-4 ml-[12%] mt-12 mb-8' />
         <h1 className='text-2xl font-bold ml-8'>Cloud Solutions</h1>
         <p className='mt-4 ml-8 text-lg text-gray-800'>Phasellus aliquam fermentum tincidunt. <br /> Duis accumsan,</p>
         <hr  className='mt-6 mb-6 ml-8 w-[315px]'/>
        <p className='ml-8 mb-8 font-semibold text-lg'>Read More</p>
        </div>

        <div className='col-span-1 hover:bg-gradient-to-r from-blue-800 to-blue-500 cardbg hover:text-white'>
         <img src={lock3} alt="" className='bg-white h-24 w-24 rounded-full p-4 ml-[12%] mt-12 mb-8 ' />
         <h1 className='text-2xl font-bold ml-8'>Data Recovery</h1>
         <p className='mt-4 ml-8 text-lg text-gray-800'>Phasellus aliquam fermentum tincidunt. <br /> Duis accumsan,</p>
         <hr  className='mt-6 mb-6 ml-8 w-[315px]'/>
        <p className='ml-8 mb-8 font-semibold text-lg'>Read More</p>
        </div>
        
       </div>

    </div>
  )
}
