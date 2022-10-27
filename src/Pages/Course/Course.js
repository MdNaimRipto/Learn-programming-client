import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { img, courseName, id, price } = props.course
    return (
        <div className="max-w-sm m-5  p-0">
            <Card className='h-80 relative' imgSrc={img}>
                <h5 className="text-sm mb-12 font-bold tracking-tight text-gray-900 dark:text-white">
                    {courseName}
                </h5>
                <div className='absolute bottom-5 flex justify-between items-center w-10/12'>
                    <Link to={`/course/${id}`}>
                        <button
                            className='py-2 px-3 bg-red-500  text-white text-sm rounded   border border-current hover:bg-white hover:text-red-500 transition'>
                            See Course Detail's
                        </button>
                    </Link>
                    <p>${price}</p>
                </div>
            </Card>
        </div>
    );
};

export default Course;