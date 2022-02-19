import React from 'react';

import { Flex, Box, Link, Image } from '@chakra-ui/react';

import { imgVideo, iconArrow } from '../assets'

import NavLink from './NavLink'
import Video from './Video';

const Footer = () => {
  return (
    <Flex as="footer" height="20vh" justify="space-between" align="center">
      <Video src={imgVideo} />

      <NavLink>
        FACEBOOK
      </NavLink>

      <NavLink>
        INSTAGRAM
      </NavLink>

      <NavLink>
        YOUTUBE
      </NavLink>

      <NavLink>
        TWITTER
      </NavLink>

      <Box width="25%" height="100%" bgColor="#000" color="#FFF">
        <Link>
          <Flex height="100%" justify="center" align="center">
            EXPLORAR MAIS
            <Image ml="10px" src={iconArrow} />
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;