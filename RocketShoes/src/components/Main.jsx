import React from 'react';

import { Box, Flex } from '@chakra-ui/react'

import Shoes from './Shoes';
import Price from './Price';

const Main = () => {
  return (
    <Box as="main" height={{ lg: '85vh' }}>
      <Flex
        width="100%"
        height={{ lg: '100vh' }}
        pos={{ md: 'static', lg: 'absolute' }}
        direction={{ md: 'column-reverse', lg: 'row' }}
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