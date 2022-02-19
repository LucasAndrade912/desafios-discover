import React from 'react';
import PropTypes from 'prop-types'

import { Box, Link } from '@chakra-ui/react'

const NavLink = ({ children }) => {
  return (
    <Box>
      <Link>
        {children}
      </Link>
    </Box>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired
}

export default NavLink;