import React from 'react';
import { 
  Box,
  Typography,
  Button,
  ThemeProvider 
} from '@mui/material';

import Filter from './Filter';
import House from './House';

import { estateData } from '../data';

import {
  headingTypo,
} from '../MaterialUI/typography';

import data from '../data.json'

const MainWrapper = () => {
  return (
    <Box
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    flexDirection='column'
    m='auto' 
    mt="13rem"
    width='90%'
    gap='3rem'
    position='relative'
    zIndex='1'
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
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
        <Filter/>
      {/* filter section end */}
      <Box
      display='flex'
      flexWrap='wrap'
      gap='7rem'
      mt='5rem'
      justifyContent='center'>
        <House data={data}/>
      </Box>
    </Box>
  )
}

export default MainWrapper;