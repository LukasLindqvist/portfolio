import React from 'react'

export default function contact() {
    return (
        <div className='container'>
            <p>Want to Get into contact with me? Fill in the form below and I will get back to you as soon as possible!</p>
            
            <div className='contact-form'>
                <h4>Contact Me</h4>
                <input type='text' placeholder='Name' className='field' id='name'/>
                <input type='email' placeholder='Email' className='field' id='email'/>
                <input type='text' placeholder='Phone Number' className='field' id='phone'/>
                <textarea placeholder='Message' className='field' id='msg'></textarea>
                <button className='button' onClick={''}>Send</button>
            </div>

        </div>
    )
}
