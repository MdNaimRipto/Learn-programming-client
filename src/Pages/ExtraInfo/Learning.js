import React from 'react';
import { TiTick } from "react-icons/ti"

const Learning = ({ learning }) => {
    console.log(learning)
    return (
        <div className='flex items-start'>
            <TiTick className='mr-3 w-12 md:w-9 text-3xl md:text-lg mt-1 text-green-600' />
            <li className='mb-3'>{learning.topic}</li>
        </div>
    );
};

export default Learning;