import React from 'react'
import { createBrowserRouter } from "react-router-dom";
// import pages
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';


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
              
        ]
    }
])

export default router