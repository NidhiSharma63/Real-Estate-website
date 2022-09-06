import React from 'react';
import Calendar from 'react-calendar'

import { 
  Box,
  Typography,
  Button,
  ThemeProvider 
} from '@mui/material';

import {
  filterTextTypo,
  NavBtnTypo2,
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
    <Box
    display='flex'
    flexDirection='column'
    gap='.6rem'
    paddingRight='2rem'
    sx={{
      borderBottom:{xs:'none',sm:'1px solid var(--text-color)'},
      borderBottom:{sm:'none',xs:'1px solid var(--text-color)'},
      marginLeft:{sm:'0rem',xs:'2.3rem'},
      width:{sm:'auto',xs:'90%'}
    }}>
      <ThemeProvider theme={filterTextTypo}>
        <Typography>Location</Typography>
        <Typography color='var(--secondary-color)'>New York,USA</Typography>
      </ThemeProvider>
    </Box>
    <form>
      <Box
      className='filter-box'>
      <ThemeProvider theme={filterTextTypo}>
        <Typography>when</Typography>
        <Typography color='var(--secondary-color)'>select move-in date</Typography>
      </ThemeProvider>
      </Box>
      {/* // */}
      <Box 
      className='filter-box'
      >
        <label htmlFor="price">price</label>
        <select name="price" id="price">
          <option value="$500-1000">$500-1000</option>
          <option value="$1000-1500">$1000-1500</option>
          <option value="$1500-2000">$1500-2000</option>
        </select>
      </Box>
      {/* // */}
      <Box 
      className='filter-box'
      >
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