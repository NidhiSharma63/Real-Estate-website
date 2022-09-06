import React from 'react';
import { 
  Box,
  Typography,
  Button,
  ThemeProvider 
} from '@mui/material';
import { 
  NavTypo,
  LogoTypo,
  NavBtnTypo ,
  NavBtnTypo2
} from '../MaterialUI/typography'

const Header = () => {
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
      width='90%'
      margin='auto'
      height='100%'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      padding='0px 10px'
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
        margin='0rem 0rem 0rem -30rem'>
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
        alignItems='center'
        gap='2rem'>
          <ThemeProvider theme={NavBtnTypo}>
            <Button>login
            </Button>
           <ThemeProvider theme={NavBtnTypo2}>
            <Button>sign up</Button>
           </ThemeProvider>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  )
}

export default Header;