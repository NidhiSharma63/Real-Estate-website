import React,{useEffect} from 'react';
import NavButton from './NavButton';

import { 
  Box,
} from '@mui/material';


const MobileNav = ({mobileNavOpen}) => {

  useEffect(()=>{
    const mobileNav =  document.querySelector('.mobile-nav')
    if(mobileNavOpen){
      mobileNav.classList.add('show-mobile-nav')
    }
    if(!mobileNavOpen){
      mobileNav.classList.remove('show-mobile-nav')
    }
  })
  return (
    <Box
    className='mobile-nav'
    display='flex'
    flexDirection='column'
    gap='3rem'
    width='35rem'
    padding='4rem'
    m='auto'
    backgroundColor='white'
    borderRadius='1rem'
    boxShadow='0px 0px 13px 0px rgb(165 165 165 / 21%)'
    sx={{
      transform:'translateY(-150%)',
      transition:'.5s ease-in-out'
    }}
    >
      <ul className='nav-links'>
        <li>rent</li>
        <li>buy</li>
        <li>sell</li>
        <li>manage property</li>
        <li>Resources</li>
      </ul>
      <Box
      display='flex'
      gap='1rem'
      flexDirection='column'>
        <NavButton/>
      </Box>
    </Box>
  )
}

export default MobileNav;