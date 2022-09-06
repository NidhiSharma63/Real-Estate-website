import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../css/calendar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { 
  Box,
  Typography,
  ThemeProvider,
  Button
} from '@mui/material';

import {
  filterTextTypo,
  NavBtnTypo2
} from '../MaterialUI/typography';


const Filter = ({setSearchData}) => {

  const [location,setLocation] = useState('new york,USA');
  const [priceRange,setPriceRange] = useState('500-1000');
  const [propertType,setPropertType] = useState('flat');
  const [date,setDate] = useState(new Date());

  const [showCalender,setShowCalender] = useState(false);


  console.log(date.toString().substring(0,15))
  const getPrice = (e)=>{
    setPriceRange(e.target.value)
  }
  const getPropertyType = (e) =>{
    setPropertType(e.target.value);
  }
  const getLocation = (e) =>{
    setLocation(e.target.value)
  }
  const getDate = (date) =>{
    console.log(date.toString().substring(0,15))
    setDate(date);
  }
  const handleDisplayCalendar = () =>{
    setShowCalender((prev)=>!prev)
  }
  const handleData = (e) =>{
    e.preventDefault();
    setSearchData({
      'location':location,
      'priceRange':priceRange,
      'propertyType':propertType
    });
  }

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
    <form onSubmit={handleData}>
      <Box className='filter-box'>
        <label htmlFor="location">Location</label>
          <select name="location" id="location" onChange={getLocation}>
            <option value="new york,USA">new york,USA</option>
            <option value="paris,france">paris,France</option>
          </select>
        <label/>
      </Box>
      <Box
      className='filter-box'
      position='relative'
      gap='0rem'>
      <ThemeProvider theme={filterTextTypo}>
        <Typography>when</Typography>
        <Box display='flex'>
          <Typography color='var(--secondary-color)'>{date.toString().substring(0,15)}</Typography>
          <ArrowDropDownIcon
          onClick={handleDisplayCalendar}
          sx={{mt:'-3rem',fontSize:'3rem',alignSelf:'end',cursor:'pointer'}}
          />
        </Box>
        {
          showCalender &&
          <Calendar
          onChange={getDate}
          value={date}/>
        }
      </ThemeProvider>
      </Box>
      {/* // */}
      <Box 
      className='filter-box'>
        <label htmlFor="price">price</label>
        <select name="price" id="price" onChange={getPrice}>
          <option value="500-1000">$500-1000</option>
          <option value="1000-1500">$1000-1500</option>
          <option value="1500-2000">$1500-2000</option>
        </select>
      </Box>
      {/* // */}
      <Box 
      className='filter-box'>
        <label htmlFor="property">property type</label>
        <select name="property" id="property" onChange={getPropertyType}>
          <option value="flat">flat</option>
          <option value="appartment">Appartment</option>
        </select>
      </Box>
      {/* // */}
      <ThemeProvider theme={NavBtnTypo2}>
        <Button type='submit'>search</Button>
      </ThemeProvider>
    </form>
  </Box>
  )
}

export default Filter