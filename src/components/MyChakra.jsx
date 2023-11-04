'use client';

import { ChakraBaseProvider } from '@chakra-ui/react';
import React from 'react';
import { theme } from '@chakra-ui/theme';

export default function MyChakraProvider({ children }) {
  return (
    <ChakraBaseProvider theme={theme}>
      {children}
    </ChakraBaseProvider>
  );
}