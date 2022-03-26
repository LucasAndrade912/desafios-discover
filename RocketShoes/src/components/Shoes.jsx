import React from 'react';

import { Flex, Box, Image, Container, Center } from '@chakra-ui/react'

import {
  tenisAmpliado,
  tenis1Galeria,
  tenis2Galeria,
  tenis3Galeria
} from '../assets'

const Shoes = () => {
  return (
    <Box
      width={{ md: '100%', lg: '60%' }}
      height="100%"
      pos="relative"
      bgColor="#C4C4C4"
    >
      <Flex
        width="100%"
        height={{ md: 'auto', lg: '80%' }}
        pos={{ md: 'static', lg: 'absolute' }}
        padding={{ md: '2rem 0' }}
        bottom="0"
        justify="center"
        align="center"
      >
        <Box>
          <Center width="100%">
            <Image width="55%" src={tenisAmpliado} alt="Tênis sportivo" />
          </Center>

          <Flex justify="space-between" align="center">
              <Image
                width="30%"
                objectFit="cover"
                src={tenis1Galeria}
                alt="Tênis 1 galeria"
              />
              <Image
                width="30%"
                objectFit="cover"
                src={tenis2Galeria}
                alt="Tênis 2 galeria"
              />
              <Image
                width="30%"
                objectFit="cover"
                src={tenis3Galeria}
                alt="Tênis 3 galeria"
              />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Shoes;