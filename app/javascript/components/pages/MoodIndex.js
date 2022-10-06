import React from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const MoodIndex = () => {
   return (
      <>
         <div>
            <NavLink to="/">
               <Button>Calm</Button>
            </NavLink>
            <NavLink to="/">
               <Button>Epic</Button>
            </NavLink>
            <NavLink to="/">
               <Button>Fury</Button>
            </NavLink>
            <NavLink to="/">
               <Button>Heartbreak</Button>
            </NavLink>
            <NavLink to="/">
               <Button>Hype</Button>
            </NavLink>
            <NavLink to="/">
               <Button>Upbeat</Button>
            </NavLink>
         </div>
      </>
   )
}

export default MoodIndex
