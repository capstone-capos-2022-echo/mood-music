import React from 'react'
import { NavLink } from "react-router-dom";
import { Button } from 'reactstrap'

const NotFound = () => {
  return (
    <div className="not-found" >
      <h2>Oops looks like we're not in the mood</h2>
      <p>To get back in the mood, click on the button below</p>
      <NavLink to="/">
          <Button className="back-to-mood-button" variant="outline-dark">
              <div className="btm-button-text">
              Back to Home
              </div>
          </Button>
        </NavLink>
      <br/>
      <img className='notfound-img' src="https://pbs.twimg.com/media/CHBf9n5XIAARcVc.jpg" alt="Broken CD's"></img>
    </div>
  )
}

export default NotFound
