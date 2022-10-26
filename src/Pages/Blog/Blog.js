import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import faqImage from "../../Assets/faq.jpg"

const Blog = () => {
    return (
        <div>
            <div className='bg-[#faebd76e]'>
                <div className='container mx-auto w-[85%] mt-5 py-20'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='py-12 text-center md:text-left'>
                            <h2 className='text-3xl md:text-4xl mb-4 font-semibold'>Welcome to The Blog Page</h2>
                            <p>We tried to write some blogs about programming. Hope it will helpful. Happy Reading!</p>
                        </div>
                        <div>
                            <img src={faqImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <Card className='mb-8 bg-[#fff1de9c]'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        what is cors?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                <Card className='mb-8 bg-[#fff1de9c]'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Why are you using firebase? What other options do you have to implement authentication?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                <Card className='mb-8 bg-[#fff1de9c]'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        How does the private route work?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                <Card className='mb-12 bg-[#fff1de9c]'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        What is Node? How does Node work?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default Blog;