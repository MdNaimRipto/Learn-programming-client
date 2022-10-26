import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-0 md:mt-12 mb-8'>
            {
                courses.map(course =>
                    <Course key={course.id} course={course}></Course>
                )
            }
        </div>
    );
};

export default Courses;