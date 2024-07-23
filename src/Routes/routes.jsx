import React from 'react'
import { createBrowserRouter } from "react-router-dom";
// import pages
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
import BlogDetails from '../Components/BlogDetails/BlogDetails';


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
    }
])

export default router