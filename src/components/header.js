import React from 'react';
import '../css/headerStyle.css';
import AnchorLink from "react-anchor-link-smooth-scroll";


function Header() {



    const openBurger = (e) => {
        console.log(e);
        let burgerIcon = e.currentTarget;
        let mobileMenu = document.querySelector('#mobileMenu');

        console.log(burgerIcon);
        if(burgerIcon.classList.contains('open')){
            burgerIcon.classList.remove('open');
            mobileMenu.style.marginLeft = '100%';
        }else{
            burgerIcon.classList.add('open');
            mobileMenu.style.marginLeft = '50%';
        }   

      
      
        
    }




    return (
        <nav className='mainNav'>

            <p className='mainLogo'>JSG - website under development</p>
            <ul>
                <li><AnchorLink href='#section-aboutMe'>About Me</AnchorLink></li>
                <li><AnchorLink href='#section-portfolio'>Portfolio</AnchorLink></li>
                 <li><AnchorLink href='#section-skills'>Skills</AnchorLink></li>
                <li><AnchorLink href='#section-contactMe'>Contact ME</AnchorLink></li>
            </ul>
            <div id='mobileMenu'>
                <ul>
                    <li><AnchorLink href='#section-aboutMe'>About Me</AnchorLink></li>
                    <li><AnchorLink href='#section-portfolio'>Portfolio</AnchorLink></li>
                     <li><AnchorLink href='#section-skills'>Skills</AnchorLink></li>
                    <li><AnchorLink href='#section-contactMe'>Contact ME</AnchorLink></li>
                </ul>

            </div>
            <div id="nav-icon2" onClick={openBurger}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
           
        </nav>

    )

}

export default Header;