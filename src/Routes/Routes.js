import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import FAQ from "../Pages/FAQ/FAQ"
import Home from "../Pages/Home/Home"
import Login from "../Pages/SignInSignUp/Login"
import Register from "../Pages/SignInSignUp/Register"
import Courses from "../Pages/Courses/Courses"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
import Secondary from "../Layout/Secondary"
import Blog from "../Pages/Blog/Blog"
import CourseInfo from "../Pages/CourseInfo/CourseInfo"
import Checkout from "../Pages/Checkout/Checkout"
import PrivateRoute from "./PrivateRoute"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://learn-programming-server-three.vercel.app/course/${params.id}`)
                }
            }
        ]
    },
    {
        path: "/",
        element: <Secondary></Secondary>,
        children: [
            {
                path: "/courses",
                element: <Courses></Courses>,
                loader: async () => {
                    return fetch("https://learn-programming-server-three.vercel.app/courses")
                }
            },
            {
                path: "/course/:id",
                element: <CourseInfo></CourseInfo>,
                loader: async ({ params }) => {
                    return fetch(`https://learn-programming-server-three.vercel.app/course/${params.id}`)
                }
            }
        ]
    }
])