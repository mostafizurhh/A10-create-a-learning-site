import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourses from '../AllCourses/AllCourses';

const Categories = () => {
    const courses = useLoaderData();
    // console.log(courses)
    return (
        <div className='mt-4 mb-4'>
            {
                courses.map(course => <AllCourses
                    key={course.id}
                    course={course}
                ></AllCourses>)
            }
        </div>
    );
};

export default Categories;