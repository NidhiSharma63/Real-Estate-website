import React, { useState,useEffect } from 'react';
import { 
  Box,
  Typography,
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
    console.log(searchData)
    
    setShowData(()=>(
      data.filter((item)=>{
        if(searchData.priceRange==='All' &&
        searchData.propertyType==='All' &&
        searchData.location==='All'){
          return data;
        }
        if(searchData.priceRange!=='All' &&
          searchData.propertyType==='All' &&
          searchData.location==='All'){
          return (item.priceRange===searchData.priceRange)
        }
        if(searchData.propertyType!=='All' &&
          searchData.priceRange==='All' &&
          searchData.location==='All'){
            console.log('property typ only have value')
          return (item.type===searchData.propertyType)
        }
        if(searchData.location!=='All' &&
          searchData.priceRange==='All' &&
          searchData.propertyType==='All'){
          return (item.Location===searchData.location)
        }
        // 
        if(searchData.priceRange!=='All' &&
          searchData.location==='All' &&
          searchData.propertyType!=='All'){
          return (item.priceRange===searchData.priceRange &&
            item.type===searchData.propertyType)
        }
        if(searchData.propertyType!=='All' &&
          searchData.priceRange==='All' &&
          searchData.location!=='All'){
          return (item.type===searchData.propertyType &&
          item.Location===searchData.location)
        }
        if(searchData.location!=='All' &&
          searchData.priceRange!=='All' &&
          searchData.propertyType==='All'){
          return (item.Location===searchData.location &&
            item.priceRange===searchData.priceRange)
        }
        // 
        if(searchData.priceRange!='All' && 
          searchData.location!='All' &&
          searchData.propertyType!='All'){
          return( item.priceRange===searchData.priceRange &&
          item.type===searchData.propertyType &&
          item.Location===searchData.location);
       }
      })
    ));

    console.log(showData)
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