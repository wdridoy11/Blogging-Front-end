import React from 'react'
import { createBrowserRouter } from "react-router-dom";
// import pages
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
import BlogDetails from '../Components/BlogDetails/BlogDetails';
import Dashboard from '../Layout/Dashboard';
import SaveBlog from '../Pages/Dashboard/User/SaveBlog/SaveBlog';
import FavoriteBlog from '../Pages/Dashboard/User/FavoriteBlog/FavoriteBlog';
import UserProfile from '../Pages/Dashboard/User/UserProfile/UserProfile';


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
    }
])

export default router