import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import FAQ from "../Pages/FAQ/FAQ"
import Home from "../Pages/Home/Home"
import Login from "../Pages/SignInSignUp/Login"
import Register from "../Pages/SignInSignUp/Register"
import Courses from "../Pages/Courses/Courses"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"

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
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            }
        ]
    }
])