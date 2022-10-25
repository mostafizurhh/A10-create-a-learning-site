import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {
    const course = useLoaderData();
    // console.log(course)
    const navigate = useNavigate()

    const showToastMessage = () => {
        toast.success('Thank you for your purchase!', {
            position: toast.POSITION.TOP_CENTER
        });
        navigate('/')
    };

    return (
        <div className='mt-4 mb-4 bg-warning p-2 '>
            <div>
                <h2>Name: {course.name}</h2>
                <h3>Price: ${course.price}</h3>
            </div>

            <ToastContainer autoClose={3000} />

            <button onClick={showToastMessage} className='btn'>Buy Now</button>
        </div>
    );
};

export default CheckOut;