import React from 'react';


function Skill(props) {

    return (
        <div className='skillWrapper' onClick={ props.onClick }>
            <div className='skillContainer'>
                <img src={props.img} alt={props.skillName} />
            </div>

        </div>
    );
}

export default Skill;