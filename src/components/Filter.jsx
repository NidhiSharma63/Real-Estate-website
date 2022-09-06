import React from 'react';
import Calendar from 'react-calendar'

import { 
  Box,
  Typography,
  ThemeProvider 
} from '@mui/material';

import {
  filterTextTypo,
} from '../MaterialUI/typography';


const Filter = () => {
  return (
  <Box 
  width='95%'
  display='flex'
  justifyContent='space-between'
  backgroundColor='white'
  sx={{
    padding:{md:'2rem 3rem',xs:'2rem 1rem'},
    flexDirection:{sm:'row',xs:'column'},
    alignItems:{sm:'center',xs:'flex-start'},
    gap:{sm:'0rem',xs:'2rem'}
  }}
  borderRadius='.4rem' >
    <form>
      <Box className='filter-box'>
        <label htmlFor="location">Location</label>
          <select name="location" id="location">
            <option value="new york,USA">new york,USA</option>
            <option value="paris,london">paris,london</option>
            <option value="maharasjhk jkb">maharasjhk jkb</option>
          </select>
        <label/>
      </Box>
      <Box
      className='filter-box'>
      <ThemeProvider theme={filterTextTypo}>
        <Typography>when</Typography>
        <Typography color='var(--secondary-color)'>select move-in date</Typography>
      </ThemeProvider>
      </Box>
      {/* // */}
      <Box 
      className='filter-box'>
        <label htmlFor="price">price</label>
        <select name="price" id="price">
          <option value="$500-1000">$500-1000</option>
          <option value="$1000-1500">$1000-1500</option>
          <option value="$1500-2000">$1500-2000</option>
        </select>
      </Box>
      {/* // */}
      <Box 
      className='filter-box'>
        <label htmlFor="property">property type</label>
        <select name="property" id="property">
          <option value="House">House</option>
          <option value="Appartment">Appartment</option>
        </select>
      </Box>
      {/* // */}
    </form>
  </Box>
  )
}

export default Filter