import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../Assets/banner.png"
import { Team } from '../Team/Team';

const Home = () => {
    return (
        <div>
            <div className='bg-[#ffefda]'>
                <div className='container mx-auto w-[85%] mt-5 py-20'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='py-12 text-center md:text-left'>
                            <h2 className='text-3xl md:text-4xl mb-4 font-semibold'>Build Skills With Learn Programming</h2>
                            <h2 className='text-3xl md:text-4xl mb-4 font-semibold'>Any Time, Anywhere</h2>
                            <p>We have a large number of courses in Learn Programming. Build your skill and prepare yourself for this advanced growing world with us.</p>
                            <Link to="/courses">
                                <button className='bg-red-500 py-2 px-4 font-semibold rounded text-white mt-5'>Visit Courses</button>
                            </Link>
                        </div>
                        <div>
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Team></Team>
            </div>
        </div>
    );
};

export default Home;

