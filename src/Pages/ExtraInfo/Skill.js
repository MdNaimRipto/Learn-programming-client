import React from 'react';

const Skill = ({ skill }) => {
    return (
        <li className='list-disc mb-3'>{skill.skill}</li>
    );
};

export default Skill;