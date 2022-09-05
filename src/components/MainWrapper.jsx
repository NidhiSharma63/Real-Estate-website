import React from 'react';
import { 
  Box,
  Typography,
  Button,
  ThemeProvider 
} from '@mui/material';

import {
  headingTypo,
} from '../MaterialUI/typography'

const MainWrapper = () => {
  return (
    <Box
      m='auto' 
      mt="13rem"
      width='90%'>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        >
        <ThemeProvider theme={headingTypo}>
          <Typography variant='h1'>Search properties for rent</Typography>
        </ThemeProvider>
        <select name="cars" className='selector'>
          <option value="" disabled selected>Search with Search Bar</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </Box>
      {/* top-section end */}
      <Box>

      </Box>
    </Box>
  )
}

export default MainWrapper;