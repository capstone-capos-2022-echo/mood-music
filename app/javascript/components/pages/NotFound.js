import React from 'react'

const NotFound = () => {
  return (
    <div className="not-found" >
      <h1 >Oops looks like we're not in the mood</h1>
      <p >To get back in the mood click home or follow the link below</p>
      <img src="https://pbs.twimg.com/media/CHBf9n5XIAARcVc.jpg" alt="Broken CD's"></img>
      <button className='back-btn'>
        <a href="/">Go Back</a>
      </button>
    </div>
  )
}

export default NotFound