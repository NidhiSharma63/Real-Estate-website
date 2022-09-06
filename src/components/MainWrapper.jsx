import React, { useState } from 'react';
import { 
  Box,
  Typography,
  Button,
  ThemeProvider 
} from '@mui/material';

import Filter from './Filter';
import House from './House';
import data from '../data.json';

import {
  headingTypo,
} from '../MaterialUI/typography';


const MainWrapper = () => {

  const [getSearchData,setSearchData] = useState({});

  return (
    <Box
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    flexDirection='column'
    m='auto' 
    mt="13rem"
    gap='3rem'
    position='relative'
    zIndex='1'
    sx={{width:{lg:'90%',xs:'100%'}}}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='95%'
        >
        <ThemeProvider theme={headingTypo}>
          <Typography variant='h1'>Search properties for rent</Typography>
        </ThemeProvider>
        <select name="cars" className='filter-search-bar'>
          <option value="" disabled={true}>Search with Search Bar</option>
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
      sx={{
        gap:{lg:'5rem',md:'3rem',xs:'4rem'}
      }}
      mt='5rem'
      justifyContent='center'>
        <House data={data}/>
      </Box>
    </Box>
  )
}

export default MainWrapper;