import React from 'react'
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Works from './pages/works';
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
