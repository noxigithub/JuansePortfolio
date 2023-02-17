import React from 'react';
import { useState, useEffect, useContext, useRef } from 'react';
import '../css/websiteStyle.css';
import { SkillContext } from '../helpers/context';




function Website(props) {
    let stats = props.stats;

    const div = useRef(null);

    const checkArrays = function(arr1, arr2){
        return arr1.every((val)=>arr2.includes(val));
    }

    const {skills,setSkills} = useContext(SkillContext);

    useEffect(()=>{

        if(skills.length === 3){

            if(checkArrays(stats,skills)){
                div.current.classList.add('websiteContainerSelected');
                document.querySelector('.portfolioContainer').scrollIntoView({behavior:'smooth'});
                setTimeout(()=>{
                    div.current.classList.remove('websiteContainerSelected');
                },4000);
               
                console.log(div.current);
                console.log('el website contiene todos los skills');

                setSkills([]);
            }else{
                console.log('no son iguales');
            }
        }

    },[skills]);



    return (

        <div ref={div} className='websiteContainer'>
            <a href={props.link} target="_blank">
                <div className='websiteInfo'>
                    <div className='websiteImageContainer'>
                        <img src={props.image} />
                    </div>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>

                    <ul className='skillsUl'>
                        {
                            stats.map((stat, index) => {

                                return (<li key={index}>
                                    {stat}
                                </li>);
                            })
                        }
                    </ul>
                </div>
            </a>

        </div>
    )


}


export default Website;