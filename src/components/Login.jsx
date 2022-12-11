import React from 'react';
import { NavLink } from "react-router-dom";

const Login = () => {
  return (


    <div className='bg-gray-800 h-screen grid place-items-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>LOG IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input id="rem" className='mr-2' type="checkbox" /><label for="rem"> Remember Me</label></p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-indigo-700 shadow-lg shadow-indigo-700/50 hover:shadow-indigo-700/40 text-white font-semibold rounded-lg'>LOGIN</button>
                <br />
                <div className='text-center text-gray-400 py-2'>
                    Need an Account?
                    <NavLink to="/registration" className='underline mx-2 hover:text-indigo-500 '>REGISTER HERE</NavLink>
                </div>
                
            </form>
        </div>
    
  )
};

export default Login;
