import React from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const MoodIndex = ({songs}) => {

   const moodsArr = [...new Set(songs?.map(song => song.mood))]

   return (
      <>
         <h1>Moods</h1>
         <div>
            {moodsArr?.sort().map((mood, index) =>
               <NavLink to={`/moods/${mood}`}>
                  <Button key={index}>{mood}</Button>
               </NavLink>
            )}
         </div>
      </>
   )
}

export default MoodIndex
