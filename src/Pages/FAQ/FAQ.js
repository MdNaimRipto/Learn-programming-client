import { Accordion } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import faqImage from "../../Assets/faq.jpg"

const FAQ = () => {
    return (
        <>
            <div className='bg-[#faebd76e]'>
                <div className='container mx-auto w-[85%] mt-5 py-20'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='py-12 text-center md:text-left'>
                            <h2 className='text-3xl md:text-4xl mb-4 font-semibold'>Common Faq's About Programming</h2>
                            <p>Every beginner who want's to start programming have a lot's of question's in there head. So we tried to cover some common question about programming into the below section.</p>
                            <Link to="/home">
                                <button className='bg-red-500 py-2 px-4 font-semibold rounded text-white mt-5'>Return to Home</button>
                            </Link>
                        </div>
                        <div>
                            <img src={faqImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto my-16'>
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Is there a difference between a coder and a programmer?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Although the main activity for both coders and programmers is coding, programmers typically have a more complex set of tasks they need to perform. Coders usually solely write application code in the programming language they are instructed to, whereas programmers also need to create software functions, develop automation logic and solve various problems.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out this guide to learn how to{' '}
                                <a
                                    href="https://flowbite.com/docs/getting-started/introduction/"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    get started
                                </a>
                                {' '}and start developing websites even faster with components on top of Tailwind CSS.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What is the job outlook for programmers?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                According to the Bureau of Labor Statistics, the job outlook for programmers is likely to decline by 7% from 2018 to 2028. Since computer programming can be performed from anywhere in the world, many companies hire programmers in places where compensation is lower, which may limit job growth for programmers in the United States.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out the{' '}
                                <a
                                    href="https://flowbite.com/figma/"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Figma design system
                                </a>
                                {' '}based on the utility classes from Tailwind CSS and components from Flowbite.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What skills do programmers need?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The most important skills for a programmer are:
                            </p>
                            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                <li>
                                    <span className='font-semibold'>Mathematical skills:</span> A basic understanding of both arithmetic and algebra is essential for programming.

                                </li>
                                <li>
                                    <span className='font-semibold'>Problem-solving:</span> A significant amount of a programmer's time is spent on solving various issues with the software.

                                </li>
                                <li>
                                    <span className='font-semibold'>Communication:</span> Most software development jobs are team efforts, so programmers need to be able to successfully communicate with other team members.

                                </li>
                                <li>
                                    <span className='font-semibold'>Computer skills:</span> Most programmers have computer knowledge beyond the programming languages they routinely use.

                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </>
    );
};

export default FAQ;