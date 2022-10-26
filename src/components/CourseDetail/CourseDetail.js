import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import './CourseDetail.css'
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print'



const CourseDetail = () => {
    const course = useLoaderData();
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Course Details',
    })
    // console.log(course)

    return (
        <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }} className='mt-4 mb-4 single-course p-2'>
            <div className='text-center mb-3'>
                <img src={course.image} className='img-fluid' style={{ height: 200 }} alt="" />
            </div>
            <div className='d-flex justify-content-between mb-2'>
                <h4>Name: {course.name}</h4>
                <h4>Price: ${course.price}</h4>
                <button onClick={handlePrint}><FaDownload></FaDownload></button>
            </div>
            <div>
                {course.details}
            </div>
            <div className='text-center mt-3'>
                <Link to={`/checkout/${course.id}`}>
                    <button className='btn btn-primary btn-sm'>Get premium access</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetail;