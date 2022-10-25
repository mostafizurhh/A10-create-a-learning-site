import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const course = useLoaderData();
    // console.log(course)

    return (
        <div className='mt-4 mb-4'>
            <div className='text-center mb-3'>
                <img src={course.image} className='img-fluid' style={{ height: 200 }} alt="" />
            </div>
            <div className='d-flex justify-content-between mb-2'>
                <h4>Name: {course.name}</h4>
                <h4>Price: ${course.price}</h4>
                <button className='btn btn-primary btn-sm'>Get premium access</button>
            </div>
            <div>
                {course.details}
            </div>
        </div>
    );
};

export default CourseDetail;