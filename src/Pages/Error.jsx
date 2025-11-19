import React from 'react';
import ErrorIcon from "../assets/Error.png"
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='w-8/12 mx-auto bg-white rounded-2xl m-10 md:py-20 flex flex-col justify-center items-center'>
            <img className='w-48 p-6' src={ErrorIcon} alt="" />
            <Link to="/" className='pb-10'>
            <button className='btn btn-outline btn-success '>Home</button>
            </Link>
        </div>
    );
};

export default Error;