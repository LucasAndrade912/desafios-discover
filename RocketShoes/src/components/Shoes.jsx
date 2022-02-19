import React from 'react';

import { Flex, Box, Image, Container } from '@chakra-ui/react'

import {
  tenisAmpliado,
  tenis1Galeria,
  tenis2Galeria,
  tenis3Galeria
} from '../assets'

const Shoes = () => {
  return (
    <Box
      width="60%"
      height="100%"
      pos="relative"
      bgColor="#C4C4C4"
    >
      <Flex
        width="100%"
        height="80%"
        pos="absolute"
        bottom="0"
        justify="center"
        align="center"
      >
        <Box>
          <Container>
            <Image src={tenisAmpliado} alt="Tênis sportivo" />
          </Container>

          <Flex justify="space-between" align="center">
            <Container cursor="pointer">
              <Image src={tenis1Galeria} />
            </Container>
            <Container cursor="pointer">
              <Image src={tenis2Galeria} />
            </Container>
            <Container cursor="pointer">
              <Image src={tenis3Galeria} />
            </Container>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Shoes;