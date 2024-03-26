import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserProtected = () => {

    //   authenication checked here
    const user = false

    // if user value i true, show the element user
  return user?<Outlet/> : <Navigate to="/login"/>
}

export default UserProtected
