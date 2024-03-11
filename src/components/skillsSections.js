import React, { useContext, useState } from 'react';
import { SkillContext } from '../helpers/context';
import Skill_experience from './skill_experience.js';
import '../css/skillsStyle.css';
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
import firebaseLogo from '../images/firebase.png';
import dartLogo from '../images/dart.png';
import larvelLogo from '../images/laravel.png';
import nextjsLogo from '../images/nextjs.png';
import visualStudioCode from '../images/visual.png';
import androidStudio from '../images/androidstudio.png';
import python from '../images/python.png';

function Skills() {
    const { skills, setSkills } = useContext(SkillContext)

    const [isClicked, setIsClicked] = useState(false);

    const [skillExperience, setSkillExperience] = useState(false);

    const clickHandler = () => {
        setIsClicked(!isClicked);
    }

    const [skillsClicked, setSkillsClicked] = useState([]);

    const skillClicked = (e) => {
        setSkillExperience(true);

        let skillName = "";

        if (e.target.className == 'skillWrapper' || e.target.className == 'skillContainer') {

            skillName = e.target.querySelector('img').alt;

        } else {

            skillName = e.target.alt;
        }

        if (!skills.includes(skillName)) {
            setSkills(skills => [...skills, skillName]);
        }

    }

    return (
        <div id="section-skills" className='SkillsContainer'>

            <h2>Skills</h2>


            <div className='skillsSection front-end'>
                <h3>Frontend</h3>
                <div className='skills-div'>
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
                    
                </div>

            </div>

            <div className='skillsSection front-end'>
                <h3>Backend</h3>
                <div className='skills-div'>
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
                        skillName="Firebase"
                        img={firebaseLogo}
                    />
                </div>
            </div>


            
            <div className='skillsSection front-end'>
                <h3>Mobile</h3>
                <div className='skills-div'>


                    <Skill
                        onClick={skillClicked}
                        skillName="Flutter"
                        img={flutterLogo}
                    />

                    <Skill
                        onClick={skillClicked}
                        skillName="Dart"
                        img={dartLogo}
                    />
                </div>
            </div>

            <div className='skillsSection front-end'>
                <h3>Herramientas</h3>
                <div className='skills-div'>
                    <Skill
                        onClick={skillClicked}
                        skillName="GIT"
                        img={gitLogo}
                    />
                      <Skill
                        onClick={skillClicked}
                        skillName="Visual Studio Code"
                        img={visualStudioCode}
                    />
                      <Skill
                        onClick={skillClicked}
                        skillName="Android Studio"
                        img={androidStudio}
                    />
                </div>
            </div>
            <div className='skillsSection front-end'>
                <h3>Aprendiendo</h3>
                <div className='skills-div'>
                      <Skill
                        onClick={skillClicked}
                        skillName="Nextjs"
                        img={nextjsLogo}
                    />

                     <Skill
                        onClick={skillClicked}
                        skillName="Laravel"
                        img={larvelLogo}
                    />

                     <Skill
                        onClick={skillClicked}
                        skillName="Python"
                        img={python}
                    />

                </div>
            </div>

        </div>
    );

}

export default Skills;