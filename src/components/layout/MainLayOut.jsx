import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayOut = () => {
  return (
    <div>
          <Header />
          <Footer/>
    </div>
  )
}

export default MainLayOut
