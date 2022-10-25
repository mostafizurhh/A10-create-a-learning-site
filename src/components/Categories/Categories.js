import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div className='mt-4 mb-4'>
            <div className='text-center mb-3'>
                <img src={course[0].image} className='img-fluid' style={{ height: 200 }} alt="" />
            </div>
            <div className='d-flex justify-content-between mb-2'>
                <h4>Name: {course[0].name}</h4>
                <h4>Price: ${course[0].price}</h4>
                <button className='btn btn-primary btn-sm'>Get premium access</button>
            </div>
            <div>
                {course[0].details}
            </div>
        </div>
    );
};

export default Categories;