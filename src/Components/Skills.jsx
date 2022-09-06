import React from 'react'
import {MdSlowMotionVideo} from 'react-icons/md'

export default function Skills() {
  return (
    <div className='flex skillbg mix-blend-darken pb-16' >
    <div className='border-2 border-black w-[]'>
      
      <h1 className='font-bold text-5xl pt-28 pb-8 leading-tight text-white '>Skill Standards For <br /> Information Technology.</h1>
       
       <button className='bg-gradient-to-r from-blue-800 to-blue-500 p-5 px-8  text-white font-semibold text-lg'>Discover More</button>
    </div>
    <div className='border border-black pt-44 px-11 h-72'>
      <button className='animate-ping rounded-full bg-white p-3 text-4xl text-blue-500'><MdSlowMotionVideo/></button>
      </div>
    </div>
  

    

  )
}
