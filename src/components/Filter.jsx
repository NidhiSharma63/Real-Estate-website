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
  width='100%'
  display='flex'
  justifyContent='space-between'
  alignItems='center'
  padding='2rem 3rem'
  backgroundColor='white'
  borderRadius='.4rem' >
    <Box
    display='flex'
    flexDirection='column'
    gap='.6rem'
    paddingRight='2rem'
    borderRight='2px solid var(--form-text-color)'>
      <ThemeProvider theme={filterTextTypo}>
        <Typography>Location</Typography>
        <Typography color='var(--secondary-color)'>New York,USA</Typography>
      </ThemeProvider>
    </Box>
    <form>
      <Box
      display='flex'
      flexDirection='column'
      gap='.6rem'
      paddingRight='2rem'
      borderRight='2px solid var(--form-text-color)'>
      <ThemeProvider theme={filterTextTypo}>
        <Typography>when</Typography>
        <Typography color='var(--secondary-color)'>select move-in date</Typography>
      </ThemeProvider>
      </Box>
      {/* // */}
      <Box 
      display='flex'
      flexDirection='column'
      gap='.6rem'
      paddingRight='2rem'
      borderRight='2px solid var(--form-text-color)'
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
      display='flex'
      flexDirection='column'
      gap='.6rem'
      paddingRight='2rem'
      borderRight='2px solid var(--form-text-color)'
      >
        <label htmlFor="property">property type</label>
        <select name="property" id="property">
          <option value="House">House</option>
          <option value="Appartment">Appartment</option>
        </select>
      </Box>
      {/* // */}
      <ThemeProvider theme={NavBtnTypo2}>
        <Button>search</Button>
      </ThemeProvider>
    </form>
  </Box>
  )
}

export default Filter