import React from 'react';

import { Flex, Box } from '@chakra-ui/react'

const Shoes = () => {
  return (
    <Flex width="60%" height="100%" pos="relative" bgColor="#C4C4C4">
      <Box width="100%" height="80%" pos="absolute" bottom="0" border="1px solid green">
        Shoes
      </Box>
    </Flex>
  );
};

export default Shoes;