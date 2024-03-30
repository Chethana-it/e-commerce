import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


const MainLayOut = () => {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayOut
