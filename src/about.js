import React from 'react'
import frog from './pictures/FeelsGoodMan.png';
import { useState } from 'react';



export default function About() {

    const [info,setInfo] = useState (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Arcu risus quis varius quam quisque id. Pellentesque massa placerat duis ultricies. Mauris in aliquam sem fringilla ut.
        Mi bibendum neque egestas congue quisque egestas diam in. Quis enim lobortis scelerisque fermentum.
        Nunc consequat interdum varius sit. At erat pellentesque adipiscing commodo elit at imperdiet dui. 
        Porta nibh venenatis cras sed felis eget velit. Fames ac turpis egestas sed tempus. 
        Amet est placerat in egestas erat imperdiet. Massa massa ultricies mi quis hendrerit. 
        Quis commodo odio aenean sed adipiscing diam. Volutpat maecenas volutpat blandit aliquam etiam erat velit. 
        Lorem mollis aliquam ut porttitor leo a diam.
    </p>
    );
        const aboutClick = () => {
            setInfo(
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Arcu risus quis varius quam quisque id. Pellentesque massa placerat duis ultricies. Mauris in aliquam sem fringilla ut.
            Mi bibendum neque egestas congue quisque egestas diam in. Quis enim lobortis scelerisque fermentum.
            Nunc consequat interdum varius sit. At erat pellentesque adipiscing commodo elit at imperdiet dui. 
            Porta nibh venenatis cras sed felis eget velit. Fames ac turpis egestas sed tempus. 
            Amet est placerat in egestas erat imperdiet. Massa massa ultricies mi quis hendrerit. 
            Quis commodo odio aenean sed adipiscing diam. Volutpat maecenas volutpat blandit aliquam etiam erat velit. 
            Lorem mollis aliquam ut porttitor leo a diam.
            </p>
            ) 
        }
        const cvClick = () => {
            setInfo(
                <div className='cv-container'>
                    <div className='work-info'>
                        <h2>Work Experience</h2>
                        <h4>Front End Developer @ Company</h4>
                        <h6>March 2014 -</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Arcu risus quis varius quam quisque id. Pellentesque massa placerat duis ultricies. Mauris in aliquam sem fringilla ut.
                        </p>
                    </div>
                    <div className='work-info'>
                        <h4>Front End Developer @ Company</h4>
                        <h6>March 2014 -</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Arcu risus quis varius quam quisque id. Pellentesque massa placerat duis ultricies. Mauris in aliquam sem fringilla ut.
                        </p>
                    </div>
                    <div className='work-info'>
                        <h4>Front End Developer @ Company</h4>
                        <h6>March 2014 -</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Arcu risus quis varius quam quisque id. Pellentesque massa placerat duis ultricies. Mauris in aliquam sem fringilla ut.
                        </p>
                    </div>

                    <div className='education'>
                        <h2>Education</h2>
                        <h4>Front End Developer @ KYH</h4>
                        <h6>august 2021-august 2023</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Arcu risus quis varius quam quisque id. Pellentesque massa placerat duis ultricies. Mauris in aliquam sem fringilla ut.</p>
                    </div>
                </div>


            );
        }
                  

    return (
        <>

        <div className='grid-container'>

        <div className='leftSide'>
            <div className='profile'>
                <img src={frog} alt='yeet'/>
            </div>
            <div className='profileLinks'>
                <img src='' alt='gitHub'/>
                <img src='' alt='LinkedIn'/>
                <img src='' alt='Twitter'/>
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

        <div className='rightSide'>
            <div className='infoNav'>
                <button className='btn' onClick={aboutClick}>About Me</button>
                <button className='btn' onClick={cvClick}>CV</button>
                <div className='infoTxt'>
                    {info}
                          
                </div>
            </div>
        </div>

        </div>
                    </>
    )
}
