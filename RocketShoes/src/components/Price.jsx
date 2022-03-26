import React from 'react';

import { Flex, Box } from '@chakra-ui/react';

import Title from './Title';
import Description from './Description';
import PriceValue from './PriceValue';
import BuyButton from './BuyButton';

const Price = () => {
  return (
    <Box
      width={{ md: '100%', lg: '40%' }}
      height="100%"
      pos="relative"
    >
      <Flex
        width="100%"
        height="80%"
        pos={{ md: 'static', lg: 'absolute' }}
        justify={{ md: 'center', lg: 'flex-start' }}
        bottom="0"
        left="120px"
      >
        <Box width="50%" padding={{ md: '2rem 0' }}>
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