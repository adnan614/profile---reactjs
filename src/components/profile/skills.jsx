import React from 'react';


const Skills = (props) =>(

    <div className='Skills'>
                     <h3>Skills: </h3>
                     <ul>
                         <li>{props.skillsA}</li>
                         <li>{props.skillsB}</li>
                         <li>{props.skillsC}</li>
                     </ul>
    </div>
);

export default Skills;