import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from "../../Assets/blog.jpg"

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
                            <img src={blogImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-7'>
                <Card className='mb-8 bg-[#fff1de9c]'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        what is cors?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        CORS is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static content and the backend API. This kind of request would be called a Cross-Origin request, as a resource from one subdomain is requesting a resource from another subdomain.

                        This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as "CORS Headers", each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes.
                    </p>
                </Card>
                <Card className='mb-8 bg-[#fff1de9c]'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Why are you using firebase? What other options do you have to implement authentication?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        For user authentication and hosting I am using firebase. For implementing firebase authentication We need an auth, some authenticate functions and Firebase config file. And also a method to hide the firebase config file.
                    </p>
                </Card>
                <Card className='mb-8 bg-[#fff1de9c]'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        How does the private route work?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, this route will take the user where he want's to go. Or if the user not logged in, then this route will take the user to the log in or signup page.
                    </p>
                </Card>
                <Card className='mb-12 bg-[#fff1de9c]'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        What is Node? How does Node work?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default Blog;