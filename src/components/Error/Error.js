import React from 'react';
import ErrorImg from './error.jpeg'

const Error = () => {
    return (
        <div className='mt-5 text-center text-danger'>
            <img src={ErrorImg} alt="" />
            <h2>Oops!! Page not found. Please recheck the address.</h2>
        </div>
    );
};

export default Error;