import React from 'react';

import { Flex, Box } from '@chakra-ui/react';

const Price = () => {
  return (
    <Flex width="40%" height="100%" pos="relative">
      <Box width="100%" height="80%" pos="absolute" bottom="0" border="1px solid red">
        Price
      </Box>
    </Flex>
  );
};

export default Price;