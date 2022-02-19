import React from 'react';

import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

import {
  logo,
  iconSearch,
  iconBag
} from '../assets'

import ImageLink from './ImageLink'
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <Box
      as="nav"
      height="15%"
      pt={8}
      px={12}
      pos="relative"
      zIndex="2"
    >
      <Flex align="center" justify="space-between">
        <ImageLink src={logo} alt="RocketShoes logo" />

        <NavLink>
          HOMEM
        </NavLink>

        <NavLink>
          MULHER
        </NavLink>

        <NavLink>
          CRIANÇA
        </NavLink>

        <NavLink>
          CUSTOMIZAR
        </NavLink>

        <Box width="220px">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Image src={iconSearch} alt="Icon Search" />}
            />
            <Input
              placeholder="Pesquisar"
              borderRadius="none"
              bgColor="#FFF"
              _focus={{ border: "2px solid #FF0000" }}
            />
          </InputGroup>
        </Box>

        <ImageLink src={iconBag} alt="Icon Bag" />
      </Flex>
    </Box>
  );
};

export default NavBar;