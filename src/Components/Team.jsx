import React from 'react'
import Teamchild from './Teamchild'
import team1 from './images/team-1.jpg'
import team2 from './images/team-2.jpg'
import team3 from './images/team-3.jpg'
import team4 from './images/team-4.jpg'

export default function Team(props) {
  return (
    <div>
      <div>
        <p className='font-bold text-center text-blue-600 bg-blue-100 rounded-full m-2 p-1 w-36 h-8 mt-10 mx-auto'>Our Team</p>
        <h1 className='text-center font-bold text-5xl'>Our Expert Team Member</h1>
      </div>
      <div className='w-[85%] grid grid-cols-4 gap-4 mx-auto mt-20'>
          <Teamchild data={{img:[team1] ,heading:"Micheal Jackson",para:"CEO Founder"}}/>
          <Teamchild data={{img:[team2] ,heading:"Michelle Obama",para:"Developer"}}/>
          <Teamchild data={{img:[team3] ,heading:"Machine Kelley",para:"Sr. Designer"}}/>
          <Teamchild data={{img:[team4] ,heading:"Michelle Yeoh",para:"Sr. Market"}}/>

       </div>

    </div>
  )
}