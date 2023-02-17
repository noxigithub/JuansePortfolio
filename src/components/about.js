import React, { useContext } from 'react';
import { useState } from 'react';
import '../css/aboutStyle.css';
import Skill from './skill.js';
import reactLogo from '../images/react.png';
import flutterLogo from '../images/flutter.png';
import cssLogo from '../images/css.png';
import gitLogo from '../images/git.png';
import htmlLogo from '../images/html.png';
import javscriptLogo from '../images/javascript.png';
import mysqlLogo from '../images/mysql.png';
import nodeLogo from '../images/node.png';
import phpLogo from '../images/php.png';

import { SkillContext } from '../helpers/context';

function About() {

    const {skills, setSkills} = useContext(SkillContext)

    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = () => {
        setIsClicked(!isClicked);
    }

    const [skillsClicked, setSkillsClicked] = useState([]);

    const skillClicked = (e) => {

        let skillName = "";
        
        if (e.target.className == 'skillWrapper' || e.target.className == 'skillContainer') {

            skillName = e.target.querySelector('img').alt;
            
        } else {

            skillName = e.target.alt;
        }

        if(!skills.includes(skillName)){
            setSkills(skills => [...skills, skillName]);
        }   

       

    }


    return (
        
        <div id="section-aboutMe" className='aboutMe'>
            <h2 className={!isClicked ? 'animatedText' : ''} onClick={clickHandler}>¿ Quién es Juan Sebastian ?</h2>

            <p className={!isClicked ? 'skillsContainer hide' : ' skillsContainer show'}>Es una persona que nunca se rinde y se esfuerza por alcanzar sus metas. </p>


            <div className={!isClicked ? 'skillsContainer hide' : ' skillsContainer show'}>

                <h2>Skills</h2>

                <Skill
                    onClick={skillClicked}
                    skillName="React"
                    img={reactLogo}
                />

                <Skill
                    onClick={skillClicked}
                    skillName="HTML"
                    img={htmlLogo}
                />

                <Skill
                    onClick={skillClicked}
                    skillName="CSS"
                    img={cssLogo}
                />

                <Skill
                    onClick={skillClicked}
                    skillName="JavaScript"
                    img={javscriptLogo}
                />

                <Skill
                    onClick={skillClicked}
                    skillName="MYSQL"
                    img={mysqlLogo}
                />

                <Skill
                    onClick={skillClicked}
                    skillName="NODE"
                    img={nodeLogo}
                />

                <Skill
                    onClick={skillClicked}
                    skillName="PHP"
                    img={phpLogo}
                />

                <Skill
                    onClick={skillClicked}
                    skillName="Flutter"
                    img={flutterLogo}
                />

                <Skill
                    onClick={skillClicked}
                    skillName="GIT"
                    img={gitLogo}
                />

            </div>





        </div>

    )
}


export default About;