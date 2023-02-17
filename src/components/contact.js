import React from 'react';
import '../css/contactStyle.css';



function Contact() {

    return (
        <div id="section-contactMe" className='ContactMe'>
            <div className='contactForm-container'>

                <input type="email" placeholder='E-mail'/>

                <input type="text" placeholder='Razón' />
                <textarea id="w3review" name="w3review" rows="4" placeholder='Mensaje'>
                  
                </textarea>

                <button>Contactar</button>

            </div>

            <div className='footer'>
                <p>Todos los &copy;  derechos reservados  2023</p>
                <p>Juan Sebastian Gomez Duran</p>
            </div>

        </div>

    )
}


export default Contact;