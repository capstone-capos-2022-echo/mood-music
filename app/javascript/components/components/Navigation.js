import React from 'react'
import {Nav, NavItem, Navbar} from 'reactstrap'
import {NavLink} from 'react-router-dom'

const Navigation = ({
   logged_in,
   current_user, 
   sign_in_route, 
   sign_out_route, 
   new_user_route
}) => {
  return (
   <>
   <Navbar>
      <Nav>
         <NavItem>
            <NavLink to = "/" className="nav-link">
               Mood Music
            </NavLink>
         </NavItem>
      </Nav>
      <Nav>
         <NavItem>
            <NavLink to = "/" className="nav-link">
               Who we are
            </NavLink>
         </NavItem>
         {!logged_in && (
            <NavItem>
               <a href={sign_in_route} className="nav-link">
                  Log in
               </a>
            </NavItem>
         )}
         {!logged_in && (
            <NavItem>
               <a href={new_user_route} className="nav-link">
                  Sign Up
               </a>
            </NavItem>
         )}
         {logged_in && (
            <NavItem>
               <NavLink to = "/" className="nav-link">
                  Added Songs
               </NavLink>
            </NavItem>
         )}
         {logged_in && (
            <NavItem>
               <a href={sign_out_route} className="nav-link">
                  Sign Out
               </a>
            </NavItem>
         )}
      </Nav>
   </Navbar>
   </>
  )
}

export default Navigation
