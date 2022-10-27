import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsCreditCardFill } from "react-icons/bs"
import { FaCcMastercard, FaCcVisa, FaPaypal, FaGooglePay } from "react-icons/fa"

const Checkout = () => {
    const checkout = useLoaderData()
    console.log(checkout)
    const { img, courseName, price } = checkout
    return (
        <div className='container mx-auto my-8 boxShadow rounded px-5 py-7 w-[96%] md:w-1/2'>
            <h2 className='text-4xl mb-12 font-bold'>Checkout</h2>
            <h2 className='text-3xl mb-8 font-semibold'>Order</h2>
            <div className='flex justify-around items-center h-12 p-2 rounded font-semibold'>
                <img className='h-full' src={img} alt="" />
                <p><small>{courseName}</small></p>
                <p className='text-red-500'><small>${price}</small></p>
            </div>
            <div>
                <h2 className='text-3xl mb-8 mt-10 font-semibold'>Payment Method</h2>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <button className='flex items-center justify-between border mb-3 mr-2 border-gray-300 rounded px-4 py-2'>
                        <div className='flex items-center'>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <BsCreditCardFill className='mx-3 text-xl' />
                        </div>
                        <p className='font-semibold'>Credit/Debit Card</p>
                        <div className='flex items-center'>
                            <FaCcMastercard className='ml-3 text-xl' />
                            <FaCcVisa className='text-xl ml-1' />
                        </div>
                    </button>
                    <button className='flex items-center justify-between border mb-3 mr-2 border-gray-300 rounded px-4 py-2'>
                        <div className='flex items-center'>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <FaGooglePay className='mx-3 text-3xl' />
                        </div>
                        <p className='font-semibold w-3/4 text-left ml-5'>Credit/Debit Card</p>
                    </button>
                    <button className='flex items-center justify-between border mb-3 mr-2 border-gray-300 rounded px-4 py-2'>
                        <div className='flex items-center'>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <FaPaypal className='mx-3 text-xl' />
                        </div>
                        <p className='font-semibold w-3/4 text-left ml-5'>Credit/Debit Card</p>
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-between mt-6 pt-7 border-t border-gray-300'>
                <h4 className='text-lg font-semibold'>Total: ${price}</h4>
                <button className='bg-red-500 py-2 px-4 font-semibold rounded text-white'>
                    Confirm Checkout
                </button>
            </div>
        </div>
    );
};

export default Checkout;