import { IconButton } from '@mui/material'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import  AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full z[100] p-1 bg-my-background flex items-center justify-between drop-shadow-header-shadow'>
      <IconButton
        sx={{
          padding: '4px',
          borderRadius: '5px'
        }}
      >
        <HomeOutlinedIcon />
        <p>Home</p>
      </IconButton>

      <IconButton>
        <AppsOutlinedIcon/>
        <p>Category</p>
      </IconButton>

      <IconButton>
        < AccountCircleOutlinedIcon />
        <p>Profile</p>
      </IconButton>
    </footer>
  )
}

export default Footer
