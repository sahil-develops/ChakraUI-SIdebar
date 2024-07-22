// App.jsx
import React from 'react';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Box  p="4" w="calc(100% - 290px)">
        <div className='mainDivApp'>
          <p className=''>Hello World</p>
        </div>
          {/* Your main content goes here */}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;