import React from 'react';
import { Box } from '@mui/system';

import Header from './components/Header';
import './App.css'

const App = () => {
  return (
    <Box maxWidth='1440px' m='auto' position='relative' border='1px solid'>
      <Header/>
    </Box>
  )
}

export default App;