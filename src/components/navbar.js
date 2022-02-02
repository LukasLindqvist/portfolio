import React from 'react';
import {Link} from 'react-router-dom';


export default function navbar() {
    return (
        <nav className='nav-container'>
            <ul>
                <li><Link to=''>Home</Link></li>  
                <li><Link to='about'>About</Link></li>
                <li><Link to ='works'>Previous Works</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}
