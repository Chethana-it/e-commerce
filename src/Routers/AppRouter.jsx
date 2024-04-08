import React from 'react'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import MainLayOut from '../components/layout/MainLayOut'
import Home from '../pages/Home/home.jsx'
import User from '../pages/User/User.jsx'
import Login from '../pages/login/Login.jsx'
import UserProtected from './UserProtected.jsx'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayOut />,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    element: <UserProtected />,
                    children:[
                        {
                            path: '/user',
                            element:<User/>
                        }
                    ] 
                }
            ]
        },
        {
            path: '/login',
            element:<Login/>
        }
        
    ]
)

const AppRouter = () => {
  return <RouterProvider router={router}/>
}

export default AppRouter

