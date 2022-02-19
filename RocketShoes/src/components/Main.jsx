import React from 'react';

import { Box, Flex } from '@chakra-ui/react'

import Shoes from './Shoes';
import Price from './Price';

const Main = () => {
  return (
    <Box as="main" height="85vh">
      <Flex
        width="100%"
        height="100vh"
        pos="absolute"
        top="0"
        zIndex="1"
      >
        <Price />
        <Shoes />
      </Flex>
    </Box>
  );
};

export default Main;