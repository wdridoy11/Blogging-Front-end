import React from 'react'
import { createBrowserRouter } from "react-router-dom";
// import pages
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Login from '../Pages/Login/Login';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home/Home';
import Dashboard from '../Layout/Dashboard';
import SignUp from '../Pages/SignUp/SignUp';
import BlogDetails from '../Components/BlogDetails/BlogDetails';
import SaveBlog from '../Pages/Dashboard/User/SaveBlog/SaveBlog';
import AllUsers from '../Pages/Dashboard/Admin/AllUsers/AllUsers';
import AllBlogs from '../Pages/Dashboard/Admin/AllBlogs/AllBlogs';
import AuthorProfile from '../Components/AuthorProfile/AuthorProfile';
import CreateBlog from '../Pages/Dashboard/Admin/CreateBlog/CreateBlog';
import UserProfile from '../Pages/Dashboard/User/UserProfile/UserProfile';
import FavoriteBlog from '../Pages/Dashboard/User/FavoriteBlog/FavoriteBlog';
import AdminProfile from '../Pages/Dashboard/Admin/AdminProfile/AdminProfile';
import CreateCategory from '../Pages/Dashboard/Admin/CreateCategory/CreateCategory';
import AdminDashboard from '../Pages/Dashboard/Admin/AdminDashboard/AdminDashboard';


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
                path: "blog-details/:id",
                element:<BlogDetails > </BlogDetails>,
                loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
                // loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
                // loader: ({params})=>fetch(`${process.env.REACT_APP_API_URL}/blog/${params.id}`)

            },
            {
                path: "author-profile",
                element:<AuthorProfile /> ,
            },
              
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard />,
        children:[
           {
                path:"",
                element:<AdminDashboard />
                
           },
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
    },
    {
        path:"*",
        element:<Error />
    }
])

export default router