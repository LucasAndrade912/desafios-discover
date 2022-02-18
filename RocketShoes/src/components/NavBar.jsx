import React from 'react';

import {
  Box,
  Flex,
  Image,
  Link,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

import {
  logo,
  iconSearch,
  iconBag
} from '../assets'

const NavBar = () => {
  return (
    <nav>
      <Flex pt={8} px={12} fontSize={20} align="center" justify="space-between">
        <Box>
          <Link>
            <Image src={logo} alt="RocketShoes logo" />
          </Link>
        </Box>

        <Box>
          <Link>
            HOMEM
          </Link>
        </Box>

        <Box>
          <Link>
            MULHER
          </Link>
        </Box>

        <Box>
          <Link>
            CRIANÇA
          </Link>
        </Box>

        <Box>
          <Link>
            CUSTOMIZAR
          </Link>
        </Box>

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

        <Box>
          <Link>
            <Image src={iconBag} alt="Icon Bag" />
          </Link>
        </Box>
      </Flex>
    </nav>
  );
};

export default NavBar;