import React from 'react'
import frog from '../components/pictures/FeelsGoodMan.png';
function home() {
    return (
        <>
        <div className='hideNavbar'>
        </div>
        <div className='homePage'>
            <img src= {frog} alt='yes'/>
            <h1>Hi I'm Lukas Lindqvist</h1>
        </div>
        </>
    )
}

export default home
