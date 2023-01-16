import React from 'react'
import webImage from '../Images/photo-2.png'

function Home() {
  return (
    <div className="alert alert-info" role="alert">
      <img src="/cc 038.jpg" alt="Profile" style={{ borderRadius: '50%', width: '250px', height: '250px' }} />
      <p>Hello. My name is Rahma. I am a Fullsatack Web Developer</p>
      <img src={webImage} alt='Web' />
    </div>
  )
}

export default Home