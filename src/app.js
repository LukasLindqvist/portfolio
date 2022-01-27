import React from 'react'
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import Works from './works';
import './style.css';


import {Routes, Route} from 'react-router-dom'; 

function App() {
    return (
        <>
        <Navbar/>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='about' element={<About/>}/>
                <Route path ='works' element = {<Works/>}/>
            </Routes>
        </>
        )
}

export default App
