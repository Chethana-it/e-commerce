import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import  AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full z[100] p-1 bg-my-background flex items-center justify-between drop-shadow-header-shadow'>
      <FooterIcon Icon={HomeOutlinedIcon} Name="Home" />
      <FooterIcon Icon={AppsOutlinedIcon} Name="Category"/>
      <FooterIcon Icon={AccountCircleOutlinedIcon} Name="Profile"/>
    </footer>
  )
}

export default Footer

const FooterIcon = ({ Icon, Name }) => {
  const [whoisClick, setwhoisClick] = useState({
    home: true,
    category: false,
    profile:false
  })

  return (
    <IconButton
    sx={{
      padding: '4px',
      borderRadius: '5px',
      backgroundColor: 'red'
    }}
    >
      <div>
        <Icon />
        <p className='text-xs'>{ Name }</p>
      </div>
  </IconButton>
  )
}