import React from 'react';
import { Link } from 'react-router-dom';
import './CourseSummary.css'

const CourseSummary = ({ course }) => {
    // console.log(course)
    const { name, image, details, price } = course
    return (
        <div className='coursesummary text-center'>
            <img src={image} className='img-fluid' alt="" />
            <div className='d-flex justify-content-between p-2'>
                <p>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <div className='text-start p-2'>
                <p>
                    <>
                        {details.slice(0, 100) + '...'}
                        <Link to={`/courses/${course.id}`}> Read More</Link>
                    </>
                </p>
            </div>

        </div>
    );
};

export default CourseSummary;