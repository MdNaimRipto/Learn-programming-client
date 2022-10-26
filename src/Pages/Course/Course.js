import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiDownload } from "react-icons/fi"

const Course = (props) => {
    const { img, courseName, id } = props.course
    return (
        <div className="max-w-sm m-5  p-0 ">
            <Card className='h-80 relative' imgSrc={img}>
                <h5 className="text-sm mb-12 font-bold tracking-tight text-gray-900 dark:text-white">
                    {courseName}
                </h5>
                <div className='absolute bottom-5 flex justify-between w-10/12'>
                    <Link to={`/course/${id}`}>
                        <button
                            className='py-2 px-3 bg-red-500  text-white text-sm rounded   border border-current hover:bg-white hover:text-red-500 transition'>
                            Get Premium Access
                        </button>
                    </Link>
                    <Link to={``}>
                        <button
                            className='px-3 p-[10px] text-red-500 text-sm rounded   border border-2 border-current transition'>
                            <FiDownload />
                        </button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Course;