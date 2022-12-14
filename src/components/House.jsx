import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import { 
  Box,
  Typography,
  ThemeProvider 
} from '@mui/material';

import {
  HouseTextTypo,
} from '../MaterialUI/typography';

const IconsArray = [SingleBedIcon,BathtubIcon,CompareArrowsIcon]

const House = ({data}) => {

  const changeFavIconColor = (e) =>{
    if(e.target.style.color==='var(--text-color)'){
      e.target.style.color='var(--primary-color)';
      return;
    }
    if(e.target.style.color==='var(--primary-color)'){
      e.target.style.color='var(--text-color)';
      return;
    }
  }

  return (
    data.map((item,i)=>(
    <Box
    key={i}
    sx={{
      width:{lg:'320px',md:'280px',xs:'300px'}
    }}
    borderRadius='.4rem'
    overflow='hidden'
    boxShadow='0px 0px 10px 0px rgb(216, 216, 216)'>
      {/* // */}
        <Box 
        component='img'
        src={item.houseImg}
        width='100%'
        sx={{
          height:{sm:'200px',xs:'250px',},
          objectFit:'cover'
        }}
        alt='image'
        boxShadow='0px 0px 10px 0px rgb(216, 216, 216)'
        />
      {/* // */}
      <Box
      padding='2rem 1rem'
      display='flex'
      flexDirection='column'
      gap='1.8rem'>
        <Box
        display='flex'
        justifyContent='space-between'
        borderBottom='1px solid var(--text-color)'
        paddingBottom='1rem'>
          <Box
          display='flex'
          flexDirection='column'
          gap='.6rem'>
            <ThemeProvider theme={HouseTextTypo}>
              <Typography color='var(--primary-color)'>${item.price}
                <Box 
                component='span'
                fontSize='1rem'
                color='var(--text-color)'>
                  /month
                </Box>
              </Typography>
              <Typography  
                fontSize='2.3rem'>
                palm harbor
              </Typography>
              <Typography fontSize='1.3rem' color='var(--text-color)'>{item.desc}</Typography>
              <Typography fontSize='1.3rem'>{item.Location}</Typography>
            </ThemeProvider>
          </Box>
          <Box>
            <FavoriteBorderIcon sx={{
              fontSize:'3.8rem',
              borderRadius:'50%',
              padding:'.7rem',
              border:'1px solid var(--text-color)',
              cursor:'pointer'
            }}
            style={{color:'var(--text-color)'}}
            onClick={(e)=>changeFavIconColor(e)}
            />
            <Typography
            mt='1rem'
            backgroundColor={item.Available?'green':'red'}
            padding='.3rem'
            color='white'
            borderRadius='.5rem'>
              {item.Available?'Available':'Booked'}
            </Typography>
          </Box>
        </Box>
        <Box
        display='flex'
        justifyContent='space-between'>
            {
              IconsArray.map((Icon,i)=>(
                <Box
                display='flex'
                gap='.6rem'
                key={i}
                color='var(--text-color)'>
                  <ThemeProvider theme={HouseTextTypo}>
                    <Icon sx={{fontSize:'2rem'}}/> 
                    <Typography fontSize='1.2rem' color='var(--text-color)'>{item.info[i]}</Typography>
                  </ThemeProvider>
                </Box>
              ))
            }
        </Box>
      </Box>
    </Box>
    ))
  )
}

export default House;


// {
//   IconsArray.map((Icon,i)=>(
//     // console.log(item.info[i])
//     <Box
//     display='flex'
//     gap='.6rem'
//     key={i}
//     color='var(--text-color)'>
//       <ThemeProvider theme={HouseTextTypo}>
//       <Icon sx={{fontSize:'2rem'}}/> 
//         <Typography fontSize='1.2rem' color='var(--text-color)'>{item.info[i]}</Typography>
//       </ThemeProvider>
//     </Box>
//   ))
// }