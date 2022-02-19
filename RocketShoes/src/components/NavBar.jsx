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
    <nav>
      <Flex pt={8} px={12} fontSize={20} align="center" justify="space-between">
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
            />
          </InputGroup>
        </Box>

        <ImageLink src={iconBag} alt="Icon Bag" />
      </Flex>
    </nav>
  );
};

export default NavBar;