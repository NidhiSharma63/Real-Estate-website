import React from 'react';
import { Box } from '@mui/system';

import Header from './components/Header';
import MainWrapper from './components/MainWrapper';
import './App.css'

const App = () => {
  return (
    <Box maxWidth='1440px' m='auto' position='relative' border='1px solid'>
      <Header/>
      <MainWrapper/>
    </Box>
  )
}

export default App;