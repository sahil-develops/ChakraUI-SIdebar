// App.jsx
import React from 'react';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Box ml="240px" p="4" w="calc(100% - 290px)">
          <p>Hello World</p>
          {/* Your main content goes here */}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;