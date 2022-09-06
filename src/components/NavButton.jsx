import React from 'react';

import { 
  Button,
  ThemeProvider 
} from '@mui/material';

import { 
  NavBtnTypo ,
  NavBtnTypo2
} from '../MaterialUI/typography';

const NavButton = () => {
  return (
    <>
      <ThemeProvider theme={NavBtnTypo}>
          <Button>login</Button>
      </ThemeProvider>
      <ThemeProvider theme={NavBtnTypo2}>
        <Button>sign up</Button>
      </ThemeProvider>
    </>
  )
}

export default NavButton;