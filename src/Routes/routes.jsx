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
import AuthorProfile from '../Components/AuthorProfile/AuthorProfile';
import CreateBlog from '../Pages/Dashboard/Admin/CreateBlog/CreateBlog';
import CreateCategory from '../Pages/Dashboard/Admin/CreateCategory/CreateCategory';
import AllBlogs from '../Pages/Dashboard/Admin/AllBlogs/AllBlogs';
import AllUsers from '../Pages/Dashboard/Admin/AllUsers/AllUsers';
import AdminProfile from '../Pages/Dashboard/Admin/AdminProfile/AdminProfile';


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
            {
                path: "author-profile",
                element:<AuthorProfile /> ,
            },
              
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard />,
        children:[
           {
                path:"create-blog",
                element:<CreateBlog />
                
           },
           {
                path:"create-category",
                element:<CreateCategory />
                
           },
           {
                path:"all-blog",
                element:<AllBlogs />
                
           },
           {
                path:"all-users",
                element:<AllUsers />
                
           },
           {
                path:"profile",
                element:<AdminProfile />
                
           },
        //    {
        //         path:"Subscribe",
        //         element:<AllUsers />
                
        //    },
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
           },

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