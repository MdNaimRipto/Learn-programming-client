import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-red-500 font-bold text-9xl'>404</h1>
            <p className='font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10'>
                This page does not exist
            </p>
            <p className='text-gray-400 font-medium text-center text-sm md:text-xl lg:text-2xl mt-8'>
                The page yoe looking for not found. Please try again or check your internet connection.
            </p>
            <Link to="/home">
                <button
                    className='relative block px-8 py-3 bg-red-500 text-white border border-current mt-5 rounded hover:text-red-500 hover:bg-white transition'>
                    Return to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFoundPage;