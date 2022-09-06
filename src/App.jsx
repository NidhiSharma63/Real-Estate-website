import React from 'react';
import { Box } from '@mui/system';

import Header from './components/Header';
import MainWrapper from './components/MainWrapper';
import './css/App.css'

const App = () => {
  return (
    <Box maxWidth='1440px' m='auto' position='relative'>
      <Header/>
      <MainWrapper/>
    </Box>
  )
}

export default App;