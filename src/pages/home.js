import React from 'react'
import me from  '../components/pictures/profile.JPG'
function home() {
    return (
        <>
        <div className='homePage'>
            <img src= {me} alt='yes'/>
            <h1>Hi I'm Lukas Lindqvist</h1>
        </div>
        </>
    )
}

export default home
