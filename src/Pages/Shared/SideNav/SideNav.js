import React from 'react';
import { Sidebar } from 'flowbite-react/lib/esm/components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const SideNav = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/courses")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Sidebar aria-label="Sidebar with multi-level dropdown example" className='w-full md:w-64'>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <div className='h-[340px] mt-5 md:h-screen border-0 md:border-r md:border-gray-300'>
                            {
                                courses.map(course =>
                                    <Course key={course.id} course={course}></Course>)
                            }
                        </div>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

        </div>
    );
};


const Course = (props) => {
    const { courseName, id } = props.course
    return (
        <p className='py-4 text-center md:text-left'>
            <Link to={`/course/${id}`}><small className='font-semibold hover:text-red-500'>{courseName}</small></Link>
        </p>
    )
}

export default SideNav;