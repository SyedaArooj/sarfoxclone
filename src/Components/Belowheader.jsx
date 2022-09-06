import React from 'react'
import pic from"./images/about.jpg"
import bs from './images/about-1.png'
import bs2 from './images/about-2.png'
import bs3 from './images/about-3.png'


export default function Belowheader() {
  return (
    <div className='grid grid-cols-2 p-8 mt-28 mb-20 bg-white'>
        <div className='col-span-1 '>
   <img src={pic} className="h-screen ml-20 "
   alt="" />
        </div>
        <div className='col-span-1'>
  <p className='text-blue-600 bg-blue-200 m-2 p-1 text-center rounded-full w-36 h-8 mt-10'>About Company</p>
  <h1 className='font-bold text-5xl mt-6 leading-snug'>Making IT A Part Of <br />Your Business</h1>
  <p className='text-gray-600 mt-6 text-base leading-snug'>Aliquam suscipit purus hendrerit erat auctor fermentum. Morbi <br /> pharetra orci tortor, nec tempus quam posuere ac. Aenean <br /> dapibus eget velit ut tristique.</p>
 
 <div className='bg-white grid grid-cols-3 mt-6 m-8 gap-8'>
  <div className='col-span-1 mt-4 mb-8'>
  <img src={bs} alt="" className='h-16 w-16 mx-2'/>
  <p className='font-semibold text-lg  mt-4'>Business <br />
    improvement</p>
    </div>

    <div className='col-span-1 mt-4 mb-8 mx-'>
  <img src={bs2} alt="" className='h-16 w-16 mx-2'/>
  <p className='font-semibold text-lg  mt-4 mx-6'>Network <br /> Administration
    </p>
    </div>

    <div className='col-span-1 mt-4 mb-8'>
  <img src={bs3} alt="" className='h-16 w-16 mx-2'/>
  <p className='font-semibold text-lg  mt-4 mx-6'>User <br /> Experience</p>
    </div>

    <div>
    </div>
 </div>

      <button className='bg-blue-600 p-4'>Discover More</button>


 {/* </div> */}
</div>
    </div>
  )
}
