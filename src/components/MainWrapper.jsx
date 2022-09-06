import React, { useState,useEffect } from 'react';
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

  const [searchData,setSearchData] = useState({});
  const [showData,setShowData] = useState(data);

  useEffect(()=>{
    setShowData(data);
  },[]);


  useEffect(()=>{
    if(Object.keys(searchData).length<1) return;

    setShowData(()=>(
      data.filter((item)=>(
        item.priceRange===searchData.priceRange &&
        item.type===searchData.propertyType &&
        item.Location===searchData.location
      ))
    ));

  },[searchData]);
  
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
        </Box>
      {/* top-section end */}
        <Filter setSearchData={setSearchData}/>
      {/* filter section end */}
      <Box
      display='flex'
      flexWrap='wrap'
      sx={{
        gap:{lg:'5rem',md:'3rem',xs:'4rem'}
      }}
      mt='5rem'
      justifyContent='center'>
       {<House data={showData}/>}
      </Box>
    </Box>
  )
}

export default MainWrapper;