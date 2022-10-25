import React from 'react';
import './AllCourses.css'

const AllCourses = ({ course }) => {
    // console.log(course)
    return (
        <div className='mt-4 mb-4 border p-2 rounded singleCourse'>
            <div className='text-center mb-3'>
                <img src={course.image} className='img-fluid' style={{ height: 200 }} alt="" />
            </div>
            <div className='d-flex justify-content-between mb-2'>
                <h6>Name: {course.name}</h6>
                <h6>Price: ${course.price}</h6>
                <button className='btn btn-primary btn-sm'>Get premium access</button>
            </div>
            <div>
                {course.details}
            </div>
        </div>
    );
};

export default AllCourses;