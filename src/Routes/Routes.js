import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../Pages/Home/Home"
import Login from "../Pages/SignInSignUp/Login"
import Register from "../Pages/SignInSignUp/Register"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    }
])