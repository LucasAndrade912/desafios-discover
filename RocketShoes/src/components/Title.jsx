import React from 'react';
import PropTypes from 'prop-types'

import { Heading } from '@chakra-ui/react'

const Title = ({ children }) => {
  return (
    <Heading as="h1" fontSize="2.5rem">
      {children}
    </Heading>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired
}

export default Title;