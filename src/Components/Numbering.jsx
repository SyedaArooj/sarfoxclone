import React from 'react'
import Numberingchild from './Numberingchild'
import {GrNotes} from 'react-icons/gr'
import {TbAward} from 'react-icons/tb'
import {FaHandsHelping} from 'react-icons/fa'
import {BsPeople} from 'react-icons/bs'



 function Numbering(props) {
  return (
    <div className=' pt-20'>
         <div className='grid grid-cols-4 gap-2 w-[90%] mx-auto'>
         <Numberingchild icon={<GrNotes className=' text-blue-300'/>}  data={{head:"225k",para:"Completed Project"}}/>
         <Numberingchild icon={<BsPeople/>}  data={{head:"109+",para:"National Awards"}}/>
            <Numberingchild icon={<TbAward/>}  data={{head:"220+",para:"Team Members"}}/>
            <Numberingchild icon={<FaHandsHelping/>}  data={{head:"250k",para:"Happy Clients"}}/>
         </div>
           

             
        </div>
  )
}

export default Numbering 
