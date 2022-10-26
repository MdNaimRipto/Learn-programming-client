import React from 'react';

const Instructor = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[80%] md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-4">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center md:text-left">
                                Become an Instructor
                            </h2>
                            <p className="text-base text-center md:text-left text-gray-700 md:text-lg">
                                Instructors from around the world teach millions of students on Learn Programming. We provide the tools and skills to teach what you love.
                            </p>
                        </div>
                        <div>
                            <button
                                className='relative block px-8 py-3 bg-red-500 text-white border mx-auto md:mx-0 border-current mt-5 rounded hover:text-red-500 hover:bg-white transition'>
                                Join us Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;