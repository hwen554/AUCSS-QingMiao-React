import React from 'react';
import '../../App.css';

export default function SignUp() {
  return (
    <>
    <video src='/videos/video-1.mp4' autoPlay loop unmuted />
    <div className='container'>
      <div className='title'>Registration</div>
      <div className='content'>
        <form action='#'>
          <div className='member-details'>
            <div className='input-box'>
              <span className='details'>Full Name</span>
              <input type='text' placeholder='Enter your name' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Email</span>
              <input type='text' placeholder='Enter your email' required></input>
            </div>
            
          </div>
        </form>
      </div>
    </div>
    </>
    
    
  );
}
