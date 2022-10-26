import React, { useRef } from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AllCourses.css'
import { useReactToPrint } from 'react-to-print';

const AllCourses = ({ course }) => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Course Details',
    })
    // console.log(course)
    return (
        <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }} className='mt-4 mb-4 border p-2 rounded singleCourse'>
            <div className='text-center mb-3'>
                <img src={course.image} className='img-fluid' style={{ height: 200 }} alt="" />
            </div>
            <div className='d-flex justify-content-between mb-2'>
                <h6>Name: {course.name}</h6>
                <h6>Price: ${course.price}</h6>
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

export default AllCourses;