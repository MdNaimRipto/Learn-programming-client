import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Learning from '../ExtraInfo/Learning';
import Skill from '../ExtraInfo/Skill';
import { FaStar } from "react-icons/fa"

const CourseInfo = () => {
    const courseInfo = useLoaderData()
    const { img, rating, courseName, aboutCourse, learnings, skills } = courseInfo
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="gridCard">
                <div className='w-full md:w-11/12'>
                    <img
                        className="object-cover w-full rounded shadow-lg"
                        src={img}
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mt-4 mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:leading-none">
                            {courseName}

                        </h2>
                        <p className='flex items-center mb-5'>
                            <span>Rating:</span>
                            <FaStar className='mx-2 text-yellow-300' />
                            <span>{rating}/5</span>
                        </p>
                        <p className="text-base text-gray-700n text-justify md:text-lg">
                            <small>{aboutCourse}</small>
                        </p>
                    </div>
                    <div>
                        {
                            skills &&
                            <h2
                                className='font-bold text-xl'>SKILLS YOU WILL GAIN
                            </h2>
                        }
                        <ul className='mt-5 ml-12 font-semibold'>
                            {
                                skills?.map(skill => <Skill key={skill.id} skill={skill}></Skill>)
                            }
                        </ul>
                    </div>
                    <div className='mt-6'>
                        {
                            learnings && <h2 className='font-bold text-xl'>WHAT YOU WILL LEARN</h2>
                        }
                        <ul className='mt-5 ml-7 font-semibold'>
                            {
                                learnings?.map(learning =>
                                    <Learning key={learning.id} learning={learning}></Learning>)
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseInfo;