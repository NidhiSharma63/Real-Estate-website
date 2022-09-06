import React, { useEffect, useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import NavButton from './NavButton';

import logo from '../Images/logo.png';
import { 
  Box,
  Typography,
  ThemeProvider 
} from '@mui/material';

import { 
  LogoTypo,
} from '../MaterialUI/typography';

import MobileNav from './MobileNav';

const Header = () => {

  useEffect(()=>{
    const links = document.querySelectorAll('.nav-links li')
    console.log(links)
    links.forEach((li)=>{
      li.addEventListener('click',(e)=>{
        links.forEach((li)=>{
          li.classList.remove('nav-link-active')
        })
        e.target.classList.add('nav-link-active')
      })
    })
  },[])

  const [mobileNavOpen,setMobileNavOpen] = useState(false)
  return (
    <Box 
    maxWidth='1440px'
    height='7rem'
    width='100%'
    position='fixed'
    boxShadow='0px 0px 13px 0px rgb(165 165 165 / 21%)'
    zIndex='2'
    backgroundColor='white'
    top='0'
    >
      <Box
      margin='auto'
      height='100%'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      padding='0px 10px'
      sx={{
        width:{lg:'90%',md:'95%'}
      }}
      >
        <Box
        display='flex'
        alignItems='center'
        gap='1rem'>
          <Box
          component='img'
          src={logo}
          alt='logo'
          width='3rem'/>
          <ThemeProvider theme={LogoTypo}>
            <Typography>Estatery</Typography>
          </ThemeProvider>
        </Box>
        <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        gap='3rem'
        className='nav-menu'
        sx={{
          marginRight:{lg:'20rem',md:'6rem'}
        }}>
          <ul className='nav-links'>
            <li className='nav-link-active'>rent</li>
            <li>buy</li>
            <li>sell</li>
            <li>manage property</li>
            <li>Resources</li>
          </ul>
        </Box>
        <Box
        display='flex'
        justifyContent='space-between'
        className='nav-menu'
        alignItems='center'
        gap='2rem'>
          <NavButton/>
        </Box>
        {/* // */}
        {
          mobileNavOpen?
          <CloseIcon 
            sx={{
              fontSize:'3.6rem', 
              color:'var(--secondary-color)',
              cursor:'pointer',
              display:'none'
            }}
            className='menu-icon'
            onClick={()=>setMobileNavOpen(false)}
          />
          :<ListIcon 
          sx={{
            fontSize:'3.6rem', 
            color:'var(--secondary-color)',
            cursor:'pointer',
            display:'none'
          }}
          className='menu-icon'
          onClick={()=>setMobileNavOpen(true)}
        />
        }
      </Box>
      <MobileNav mobileNavOpen={mobileNavOpen}/>
    </Box>
  )
}

export default Header;