import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { img, courseName, id } = props.course
    return (
        <div className="max-w-sm m-5  p-0 ">
            <Card className='h-80 relative' imgSrc={img}>
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    {courseName}
                </h5>
                <Link to={`/course/${id}`}>
                    <button
                        className='py-2 px-3 bg-red-500 absolute bottom-2 text-white text-sm rounded   border border-current hover:bg-white hover:text-red-500 transition'>
                        Get Premium Access
                    </button>
                </Link>
            </Card>
        </div>
    );
};

export default Course;