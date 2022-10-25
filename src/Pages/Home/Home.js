import React from 'react';
import banner from "../../Assets/banner.png"

const Home = () => {
    return (
        <div className='bg-[#ffefda]'>
            <div className='container mx-auto w-[85%] mt-5 py-20'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='py-12 text-center md:text-left'>
                        <h2 className='text-3xl md:text-4xl mb-4 font-semibold'>Build Skills With Learn Programing</h2>
                        <h2 className='text-3xl md:text-4xl mb-4 font-semibold'>Any Time, Anywhere</h2>
                        <p>We have a large number of courses in Learn Programing. Build your skill and prepare yourself for this advanced growing world with us.</p>
                        <button className='bg-red-500 py-2 px-4 font-semibold rounded text-white mt-5'>Visit Courses</button>
                    </div>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;