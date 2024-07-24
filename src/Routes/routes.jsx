import React from 'react'
import { createBrowserRouter } from "react-router-dom";
// import pages
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home/Home';
import Dashboard from '../Layout/Dashboard';
import SignUp from '../Pages/SignUp/SignUp';
import BlogDetails from '../Components/BlogDetails/BlogDetails';
import SaveBlog from '../Pages/Dashboard/User/SaveBlog/SaveBlog';
import UserProfile from '../Pages/Dashboard/User/UserProfile/UserProfile';
import FavoriteBlog from '../Pages/Dashboard/User/FavoriteBlog/FavoriteBlog';


const router=createBrowserRouter([
    {
        path:"/",
        element:<Main /> ,
        children:[
            {
                path: "/",
                element:<Home /> ,
            },
            {
                path: "blogs",
                element:<Blogs /> ,
            },
            {
                path: "blog-details",
                element:<BlogDetails /> ,
            },
              
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard />,
        children:[
           {
                path:"favorite",
                element:<FavoriteBlog />
                
           },
           {
                path:"save",
                element:<SaveBlog />
           },
           {
                path:"user-profile",
                element:<UserProfile />
           }
        ]
    },
    {
        path:"login",
        element:<Login />
    },
    {
        path:"sign-up",
        element:<SignUp />
    }
])

export default router