import React from 'react'
// import {AiOutlineArrowRight} from 'react-icons/ai'


export default function Monitoringchild(props) {
  return (
    <div className=''>
        <div className='col-span-1'>
            <img className='w-full h-80' src={props.data.img} alt=''/>
            {/* <div>
                <img className='w-60 h-60' src={props.data.img} alt=''/>
                <h5>{props.data.heading}</h5>
                <p>{props.data.para}</p>
                <button><AiOutlineArrowRight/></button>
            </div> */} 
        </div>

    </div>
  )
}