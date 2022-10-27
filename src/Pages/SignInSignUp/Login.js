import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState("")
    const { googleLogin, githubLogin, loginWithEmailAndPassword, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleLoginWithEmailAndPassword = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        loginWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                setUser(result.user)
                console.log(user)
                form.reset()
                toast.success("Login Successful", {
                    duration: 2000,
                    style: {
                        border: '1px solid #80808082',
                        boxShadow: "none",
                        width: "350px",
                        borderRadius: "10px"
                    },
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                toast.error(`${error.message}. Please Try Again`, {
                    duration: 2000,
                    style: {
                        border: '1px solid #80808082',
                        boxShadow: "none",
                        width: "350px",
                        borderRadius: "10px"
                    },
                })
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success("Login Successful", {
                    duration: 2000,
                    style: {
                        border: '1px solid #80808082',
                        boxShadow: "none",
                        width: "350px",
                        borderRadius: "10px"
                    },
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                toast.error(`${error.message}. Please Try Again`, {
                    duration: 2000,
                    style: {
                        border: '1px solid #80808082',
                        boxShadow: "none",
                        width: "350px",
                        borderRadius: "10px"
                    },
                })
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success("Login Successful", {
                    duration: 2000,
                    style: {
                        border: '1px solid #80808082',
                        boxShadow: "none",
                        width: "350px",
                        borderRadius: "10px"
                    },
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                toast.error(`${error.message}. Please Try Again`, {
                    duration: 2000,
                    style: {
                        border: '1px solid #80808082',
                        boxShadow: "none",
                        width: "350px",
                        borderRadius: "10px"
                    },
                })
            })
    }
    return (
        <form
            onSubmit={handleLoginWithEmailAndPassword}
            className='w-11/12 md:w-[30%] mx-auto px-6 py-5 boxShadow my-12 rounded font-semibold'>
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
            <p className='text-red-800 text-center'><small>{error}</small></p>
            <p className='text-center'>
                <small>
                    Don't Have an Account?
                    <Link to="/register" className='text-red-500 ml-1'>Click Here to Register</Link>
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
    );
};

export default Login;