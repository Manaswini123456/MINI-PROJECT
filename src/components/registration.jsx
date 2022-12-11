import React from 'react';
import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className='bg-gray-800 h-screen grid place-items-center'>
            <form className='max-w-[400px] mx-auto w-full rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>REGISTER</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Full Name</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                
                <button className='w-full my-5 py-2 bg-indigo-700 shadow-lg shadow-indigo-700/50 hover:shadow-indigo-700/40 text-white font-semibold rounded-lg'>REGISTER</button>
                <br />
                <div className='text-center text-gray-400 py-2'>
                    Already have an account?
                    <NavLink to="/" className='underline mx-2 hover:text-indigo-500 '>LOGIN</NavLink>
                </div>
                
            </form>
        </div>
    
  )
};
export default Registration;
