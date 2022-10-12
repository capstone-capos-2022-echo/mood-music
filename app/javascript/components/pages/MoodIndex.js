import React from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import ParticleBackground from '../components/ParticlesBackground'

const MoodIndex = ({songs}) => {

   const moodsArr = [...new Set(songs?.map(song => song.mood))]

   return (
      <>
         <h2>Moods</h2>
         <div className='three-column-container moods'>
            {moodsArr?.sort().map((mood, index) =>
               <div className='three-column-item moods'>
                  <NavLink to={`/moods/${mood}`}>
                     <Button key={index}>{mood}</Button>
                  </NavLink>
               </div>
            )}
         </div>
         <div>
            <ParticleBackground/>
         </div>
      </>
   )
}

export default MoodIndex
