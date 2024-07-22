import React from 'react';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Dashboard/Home';
import Hero from './components/Hero/Hero';

// Assuming you have a Home component


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Flex>
          <Sidebar />
          <Box className='mainDivApp' p="4" >
            {/* Define your routes within Routes */}
            <Routes>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/" element={<Hero/>} />
              {/* You can add more routes here */}
            </Routes>
          </Box>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;