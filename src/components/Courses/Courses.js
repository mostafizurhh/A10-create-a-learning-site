import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';
import './Courses.css'

const Courses = () => {
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='courses mt-4 mb-4'>
            <div className='d-flex d-md-block flex-wrap'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='ms-2'>{category.name}</Link>
                    </p>)
                }
            </div>
            <div className='course-container'>
                {
                    courses.map(course => <CourseSummary
                        key={course.id}
                        course={course}></CourseSummary>)
                }
            </div>
        </div>
    );
};

export default Courses;