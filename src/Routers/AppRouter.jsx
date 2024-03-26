import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayOut from '../components/layout/MainLayOut'
import Home from '../pages/Home/home.jsx'
import User from '../pages/User/User.jsx'
const AppRouter = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainLayOut/>}>
                  <Route index element={<Home/>}/>
                  <Route path='user' element={<User/>} />
              </Route>
         </Routes>
      </BrowserRouter>
  )
}

export default AppRouter

