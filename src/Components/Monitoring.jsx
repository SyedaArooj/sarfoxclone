// import React from 'react'
// import mn from './images/monitoring-1.jpg'
//  function Monitoring() {
//   return (
//     <div >
//        <div className='border border-black'>
//          <img src={mn} alt="" />
         
//        </div>
//     </div>
//   )
// }
// export default Monitoring



import React from 'react'
import Monitoringchild from './Monitoringchild'
import mon from './images/monitoring-1.jpg'
import mon1 from './images/monitoring-2.jpg'
import mon2 from './images/monitoring-3.jpg'
import mon3 from './images/monitoring-4.jpg'

function Monitoring(props) {
  return (
    <div>
       <div className='grid grid-cols-4 gap-5'>
          {/* <Monitoringchild data={{img:[mon] ,heading:"Cyber Security",para:"IT Technology"}}/> */}
          <Monitoringchild data={{img:[mon]}}/>
          <Monitoringchild data={{img:[mon1]}}/>
          <Monitoringchild data={{img:[mon2]}}/>
          <Monitoringchild data={{img:[mon3]}}/>

       </div>
    </div>
  )
}
export default Monitoring