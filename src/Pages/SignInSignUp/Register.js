import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <form className='w-11/12 md:w-1/3 mx-auto px-6 py-6 boxShadow my-12 rounded font-semibold'>

                <h2 className='text-center  text-3xl mb-8'>Please Register</h2>

                <h4 className='mb-2  text-base'>User Name</h4>
                <input
                    className='w-full mb-5 py-2 pl-2 boxShadow border-0 rounded'
                    type="name" name='name' placeholder='Enter Your Full Name' required />

                <h4 className='mb-2  text-base'>Email Address</h4>
                <input
                    className='w-full mb-5 boxShadow border-0 rounded'
                    type="email" name='email' placeholder='Enter Your Email Address' required />

                <h4 className='mb-2  text-base'>Password</h4>
                <input
                    className='w-full mb-5 boxShadow border-0 rounded'
                    type="password" name='password' placeholder='Enter Your Password' required />

                <h4 className='mb-2  text-base'>Photo URL</h4>
                <input
                    className='w-full mb-8 boxShadow border-0 rounded'
                    type="text" name='photoURL' placeholder='Enter Your Photo URL' />

                <button className='w-full mb-5 bg-red-500 rounded text-white py-2 '>Login</button>
                <p className='text-center'>
                    <small>
                        Already Have an Account?
                        <Link to="/login" className='text-red-500 ml-1'>Click Here to Login</Link>
                    </small>
                </p>
                <p className='horizontal-line mt-2'>Or</p>
                <div className='flex justify-evenly items-center my-6'>
                    <button
                        onClick={handleGoogleLogin}
                        className='boxShadow w-3/6 py-3 mr-2 rounded flex justify-center items-center'>
                        <FcGoogle className='mr-2 text-2xl' /> Google
                    </button>
                    <button
                        onClick={handleGithubLogin}
                        className='boxShadow w-3/6 py-3 mr-2 rounded flex justify-center items-center'>
                        <FaGithub className='mr-2 text-2xl' /> Github
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;