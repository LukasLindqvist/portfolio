import React from 'react'
import frog from './pictures/FeelsGoodMan.png';
import Navbar from './navbar'
function home() {
    return (
        <>
        <div className='homePage'>
            <img src= {frog}/>
            <h1>Hi I'm Lukas Lindqvist</h1>
        </div>
        <Navbar/>
        </>
    )
}

export default home
