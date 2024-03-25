import React from 'react'

import menu from '../../img/menu.png'
import search from '../../img/search.png'
import cart from '../../img/cart.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { colors } from '@mui/material';


function Header() {
  return (
    <header className='fixed top-0 left-0 w-full z[100] p-1 bg-my-background flex items-center justify-between drop-shadow-header-shadow '>
      <div className='flex items-center'>
        {/* header left */}
        {/* <img src={menu} alt='menu' className='w-6 h-6 object-contain cursor-pointer'/> */}
        <MenuIcon sx={
          {color:"red"}
        }/>
        <h1 className='text-sm font-semibold ml-5'>Techovibe</h1>
        <div className='outline-none p-2 font-semibold text-sm  ml-5 flex items-center overflow-hidden'>
          <input type='text' placeholder='Search' className='rounded-full ml-6' />
          <img src={ search } alt='search' className='w-6 h-6 object-contain cursor-pointer ml-2' />
        </div>
      </div>

      <div>
        {/* left menu */}
        <img src={cart } alt='cart' className='w-6 h-6 object-contain cursor-pointer'/>
      </div>
    </header>
       
  )
}

export default Header
