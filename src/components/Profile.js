import React from 'react'
import profile from '../components/pictures/profile2.JPG'
import github from '../components/pictures/GitHub-Logo.png';
import linkedin from '../components/pictures/linkedin.png';
import twitter from '../components/pictures/twitter.png';

//output for leftside of about page
function Profile() {
  return (
      <>
        <div className='leftSide'>
            <div className='profile'>
                <img src={profile} alt='yeet'/>
            </div>
            <div className='profileLinks'>
                <a href='https://github.com/LukasLindqvist' target='_blank'>
                    <img src={github} alt='gitHub' id='github'/>
                </a>
                <a href='https://se.linkedin.com/' target='_blank'> 
                    <img src={linkedin} alt='LinkedIn' id='linkedin' />
                </a>
                <a href='https://twitter.com/syltencs' target='_blank'>
                    <img src={twitter} alt='Twitter' id='twitter'/>
                </a>
            </div>
            <div className='info'>
                <div className='languages'>
                    <h4>Languages</h4>
                    <p>Swedish</p>
                    <p>English</p>
                </div>
                <div className='programingLanguage'>
                    <h4>Programing Languages</h4>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                    <p>REACT.JS</p>
                </div>
                <div className='other'>
                    <h4>Other Interests</h4>
                    <p>Gaming</p>
                    <p>Sports/Motorsports</p>
                    <p>Music</p>
                    <p>Food</p>
                </div>
            </div>
        </div>
      </>
  )
}

export default Profile;
