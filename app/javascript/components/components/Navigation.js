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
         <Navbar className='navbar'>
            <Nav>
               <NavItem>
                  <NavLink to = "/" className="nav-logo">
                     Müd Müzik
                  </NavLink>
               </NavItem>
            </Nav>
            <Nav>
               <NavItem>
                  <NavLink to = "/aboutus" className="nav-link">
                     Who We Are
                  </NavLink>
               </NavItem>
               {!logged_in && (
                  <NavItem>
                     <a href={sign_in_route} className="nav-link">
                        Log In
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
                     <NavLink to = "/songcontributions" className="nav-link">
                        Song Contributions
                     </NavLink>
                  </NavItem>
               )}
               {logged_in && (
                  <NavItem>
                     <NavLink to = "/songnew" className="nav-link">
                        Add A Song
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
