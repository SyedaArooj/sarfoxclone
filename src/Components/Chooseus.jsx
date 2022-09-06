import React from 'react'
import pic from "./images/choose-us.jpg"
import {GiVideoConference} from 'react-icons/gi'
import {MdOutlineSupportAgent} from 'react-icons/md'
import {BiAnalyse} from 'react-icons/bi'
import {GiPerspectiveDiceSixFacesFive} from 'react-icons/gi'

export default function About() {
  return (
    <div className='grid grid-cols-2 mt-28'>
      <div className='col-span-1 '>
        <img src={pic} className="h-[100%] bg-no-repeat bg-left-top" alt="" />
        {/* <div className='imag h-[100%]'></div> */}
      </div>
      <div className='col-span-1 bg-gray-50 pb-32'>
        <p className='text-blue-600 bg-blue-100 m-2 p-1 text-center rounded-full w-36 h-8 mt-28 mx-12 font-bold'>Why Choose Us</p>
        <h1 className='font-bold text-5xl mt-2 leading-tight mx-12'>Examples Of Information <br />Technology</h1>
        <div className='flex flex-wrap justify-center'>

          <div className=' w-[270px] h-[200px] hover:bg-gradient-to-r from-blue-800 to-blue-500 bg-white hover:bg-white  hover:text-white mx-auto ml-12 mt-10'>
          <span className='mt-12 hover:text-white h-32 text-blue-600 flex justify-center align-center text-5xl w-[100%]'>
          <GiVideoConference /></span>
          <para className='font-bold text-lg text-center w-[100%] -mt-20 block'>IT Consulting <br/> Management</para>
          </div>

          <div className='w-[270px] h-[200px] hover:bg-gradient-to-r from-blue-800 to-blue-500 bg-white hover:bg-white  hover:text-white mx-auto mt-10'> 
          <span className='mt-12 hover:text-white h-32 text-blue-600 flex justify-center align-center text-5xl w-[100%]'><MdOutlineSupportAgent/></span> 
          <para className='font-bold text-lg text-center w-[100%] -mt-20 block'>Technology Support <br/> Management</para> 
          </div>

          <div className='w-[270px] h-[200px] hover:bg-gradient-to-r from-blue-800 to-blue-500 bg-white hover:bg-white  hover:text-white mx-auto ml-12 mt-8'> 
          <span className='mt-12 hover:text-white h-32 text-blue-600 flex justify-center align-center text-5xl w-[100%]'><BiAnalyse/></span> 
          <para className='font-bold text-lg text-center w-[100%] -mt-20 block'>IT Programmer <br/> Analyst</para> 
          </div>

          <div className='w-[270px] h-[200px] hover:bg-gradient-to-r from-blue-800 to-blue-500 bg-white hover:bg-white  hover:text-white mx-auto mt-8'> 
          <span className='mt-12 hover:text-white h-32 text-blue-600 flex justify-center align-center text-5xl w-[100%]'><GiPerspectiveDiceSixFacesFive/></span> 
          <para className='font-bold text-lg text-center w-[100%] -mt-20 block'>Network <br/> Specialist</para> 
          </div>

        </div>

    </div>
    </div>
  )
}