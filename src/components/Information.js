import React from 'react';
import { useState } from 'react';

// useState for about/CV on about page

function Information() {

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
                        <h6>september 2021-sometime 2023</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Arcu risus quis varius quam quisque id. Pellentesque massa placerat duis ultricies. Mauris in aliquam sem fringilla ut.</p>
                    </div>
                </div>


            );
        }


  return (
      <>
        <div className='rightSide'>
            <div className='infoNav'>
                <button className='btn' onClick={aboutClick}>About Me</button>
                <button className='btn' onClick={cvClick}>CV</button>
                <div className='infoTxt'>
                    {info}  
                </div>
            </div>
        </div>
      </>
  )
}

export default Information;
