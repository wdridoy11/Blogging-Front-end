import React from 'react'
import { createBrowserRouter } from "react-router-dom";
// import pages
import Main from '../Layout/Main';


const router=createBrowserRouter([
    {
        path:"/",
        element:<Main /> ,
        children:[
            {
                path: "/",
                element:<Main /> ,
              },
              
        ]
    }
])

export default router