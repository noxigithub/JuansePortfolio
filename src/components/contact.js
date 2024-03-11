import React from 'react';
import '../css/contactStyle.css';
import wppLogo from '../images/wpplogo.png';
import gmailLogo from '../images/gmailLogo.png';



function Contact() {

    return (
        <div id="section-contactMe" className='ContactMe'>
             <h2>Contáctame</h2>
             <div className='contactOptions'>
                <div className='contactOptionContainer'>
                    <a target='_blank' href='https://wa.link/ge4g3a'><img src={wppLogo}></img></a>
                </div>
                <div className='contactOptionContainer'>
                     < a target='_blank' href="mailto:juanc7795@gmail.com"><img src={gmailLogo}></img></a>
                </div>
            </div>

            <div className='footer'>
                <p>Todos los &copy;  derechos reservados  2024</p>
                <p>Juan Sebastian Gomez Duran</p>
            </div>

        </div>

    )
}


export default Contact;