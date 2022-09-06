import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'


export default function Teamchild(props) {
  return (
    <div className='h-auto w-auto box rounded'>
        <div className='col-span-1'>
            <img className='w-full h-80 rounded' src={props.data.img} alt=''/>
            <h1 className='font-bold text-2xl mt-6 ml-6'>{props.data.heading}</h1>
            <para className='mt-2 ml-6 text-base text-gray-600 mb-10'>{props.data.para}</para>
        </div>

    </div>
  )
}