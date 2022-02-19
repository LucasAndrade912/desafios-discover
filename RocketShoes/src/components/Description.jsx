import React from 'react';
import PropTypes from 'prop-types'

import { Text } from '@chakra-ui/react'

const Description = ({ children }) => {
  return (
    <Text mt="20px" color="#9C9696">
      {children}
    </Text>
  );
};

Description.propTypes = {
  children: PropTypes.string.isRequired
}

export default Description;