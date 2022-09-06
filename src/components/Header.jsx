import React, { useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import NavButton from './NavButton';
import { 
  Box,
  Typography,
  ThemeProvider 
} from '@mui/material';

import { 
  NavTypo,
  LogoTypo,
} from '../MaterialUI/typography';

import MobileNav from './MobileNav';

const Header = () => {

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
        <Box>
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
          marginRight:{lg:'30rem',md:'10rem'}
        }}>
          <ul className='nav-links'>
            <li>rent</li>
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