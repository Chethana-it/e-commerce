import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayOut from '../components/layout/MainLayOut'

const AppRouter = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='' element={<MainLayOut/>}>
                  <Route index element={<Body/>}/>
              </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter

