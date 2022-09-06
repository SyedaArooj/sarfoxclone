import React from 'react'

export default function Numberingchild(props) {
  return (
        // <div className=' border-2 border-red-700 w-[80%] mx-auto mb-10 mt-10 pb-10 pt-11 '>
       <div className='grid grid-cols-4 gap-4 pt-20 pb-20 mb-8 w-[80%] mx-auto'>
            <div className=' w-60 flex justify-around'>
         <div className='text-blue-600 W-72 text-3xl border p-5 bg-gray-200 h-16 mt-2'>
          {props.icon}
        </div>
        <div className=''>
            <h1 className='text-5xl font-bold '>{props.data.head}</h1>
            <p className='mt-2 text-lg'>{props.data.para}</p>
        </div>
            </div>
        </div>

        // </div>


  )
}
