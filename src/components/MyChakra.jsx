'use client';

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import React from 'react';
import fonts from '@/components/Fonts'

const theme = extendBaseTheme({
  colors: {
    primary: {
      100: "#244395",
      200: "#052240",
      300: '#fff'
    },
    link: {
      100: '#4d648a',
      200: '#24a9e1'
    },
    text: {
      100: '#C1C1C1',
      200: '#d4d4d4'
    }
  },
  fonts: {
    heading: {
      100: 'Poppins',
    },
    text: {
      100: 'Abel',
      200: 'Roboto Condensed'
    }
  }
}
)

export default function MyChakraProvider({ children }) {
  return (
    <ChakraBaseProvider theme={theme}>
      {children}
    </ChakraBaseProvider>
  );
}
