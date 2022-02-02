import React, {useRef} from  'react';
import emailjs from 'emailjs-com';


function ContactForm() {
    
    const form = useRef();
    const validator = (e) =>{

    //Checking if all fields are filled
    let nameInput = document.getElementById('name').value
    let emailInput = document.getElementById('email').value
    let subjectInput = document.getElementById('subject').value
    let msgInput = document.getElementById('msg').value

    if (nameInput === '' || emailInput === ''|| subjectInput === '' || msgInput === '') {
        alert('fill all the fields')

        //Send email with email.js if all fields are filled
    }else{
             e.preventDefault();
            
            emailjs.sendForm('service_k2n0l9k', 'template_8ihlh8l', form.current , 'user_KRcWD3j69WXjzvU7NbvMx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            alert('I will get back to you as soon as possible!')
    }     
    }
        
        return(
            <>
    <div className='contact-page'>

    <form ref={form} onSubmit={validator}>     
        <div className='contact-wrapper'>
            <div className='contact-container'>
                <div className='contact-form'>
                    <h4>Contact Me</h4>
                    <input type='text' placeholder='Name' className='field' id='name' name='name'/>
                    <input type='email' placeholder='Email' className='field' id='email' name='email'/>
                    <input type='text' placeholder='subject' className='field' id='subject' name='subject'/>
                    <textarea placeholder='Message' className='field' id='msg' name='message'></textarea>
                    <button className='button'>Send</button>
                </div>
            </div>
        </div>
    </form>
    </div>
    </>
        ) 
}

export default ContactForm;
