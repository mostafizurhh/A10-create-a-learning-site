import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Login from "../../components/Login/Login";
import Main from "../../layout/Main/Main";
import Register from "../../components/Register/Register";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";
import Error from "../../components/Error/Error";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import Categories from "../../components/Categories/Categories";
import Home from "../../components/Home/Home";
import CheckOut from "../../components/CheckOut/CheckOut";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://fun-with-programming-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`https://fun-with-programming-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fun-with-programming-server.vercel.app/courses/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])