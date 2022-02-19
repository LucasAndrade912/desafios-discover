import React from 'react';

import { Flex, Box } from '@chakra-ui/react';

import Title from './Title';
import Description from './Description';
import PriceValue from './PriceValue';
import BuyButton from './BuyButton';

const Price = () => {
  return (
    <Box
      width="40%"
      height="100%"
      pos="relative"
    >
      <Flex
        width="100%"
        height="80%"
        pos="absolute"
        bottom="0"
        justify="center"
        align="center"
      >
        <Box width="50%">
          <Title>
            Tênis Esportivo Para Corrida Top
          </Title>

          <Description>
            Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e musculoso.
          </Description>

          <PriceValue>
            R$ 1.000,00
          </PriceValue>

          <BuyButton>
            COMPRAR
          </BuyButton>
        </Box>
      </Flex>
    </Box>
  );
};

export default Price;