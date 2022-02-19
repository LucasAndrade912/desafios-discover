import React from 'react';

import { Flex } from '@chakra-ui/react'

import Shoes from './Shoes';
import Price from './Price';

const Main = () => {
  return (
    <Flex
      as="main"
      width="100%"
      height="75%"
      pos="absolute"
      top="0"
      zIndex="1"
    >
      <Price />
      <Shoes />
    </Flex>
  );
};

export default Main;