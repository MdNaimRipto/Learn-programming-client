import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

const Login = () => {
    return (
        <form className='w-11/12 md:w-[30%] mx-auto px-6 py-5 boxShadow my-12 rounded font-semibold'>
            <h2 className='text-center  text-3xl mb-5'>Please Login</h2>
            <h4 className='mb-2  text-base'>Email Address</h4>
            <input
                className='w-full mb-5 boxShadow border-0 rounded'
                type="email" name='email' placeholder='Enter Your Email Address' required />
            <h4 className='mb-2  text-base'>Password</h4>
            <input
                className='w-full mb-8 boxShadow border-0 rounded'
                type="password" name='password' placeholder='Enter Your Password' required />
            <button className='w-full mb-5 bg-red-500 rounded text-white py-2 '>Login</button>
            <p className='text-center'>
                <small>
                    Don't Have an Account?
                    <Link to="/register" className='text-red-500 ml-1'>Click Here to Register</Link>
                </small>
            </p>
            <p className='horizontal-line mt-2'>Or</p>
            <div className='flex justify-evenly items-center my-6'>
                <button
                    className='boxShadow w-3/6 py-3 mr-2 rounded flex justify-center items-center'>
                    <FcGoogle className='mr-2 text-2xl' /> Google
                </button>
                <button
                    className='boxShadow w-3/6 py-3 mr-2 rounded flex justify-center items-center'>
                    <FaGithub className='mr-2 text-2xl' /> Github
                </button>
            </div>
        </form>
    );
};

export default Login;