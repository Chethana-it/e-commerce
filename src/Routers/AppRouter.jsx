import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayOut from '../components/layout/MainLayOut'
import Home from '../pages/Home/home.jsx'
const AppRouter = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainLayOut/>}>
                  <Route index element={<Home/>}/>
              </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter

