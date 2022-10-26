import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='border-t border-gray-300'>
            <div className='flex justify-center items-center mt-10 mb-8'>
                <a
                    href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                    className='mx-2 text-lg hover:text-red-500'><FaFacebookF />
                </a>
                <a
                    href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                    className='mx-2 text-lg hover:text-red-500'><FaTwitter />
                </a>
                <a
                    href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                    className='mx-2 text-lg hover:text-red-500'><FaInstagram />
                </a>
                <a
                    href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
                    className='mx-2 text-lg hover:text-red-500'><FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/" target="_blank" rel="noopener noreferrer"
                    className='mx-2 text-lg hover:text-red-500'><FaGithub />
                </a>
            </div>
            <div className='bg-gray-300 py-5 text-center'>
                <p>© 2022 Copyright: Learn Programming</p>
            </div>
        </div>
    );
};

export default Footer;