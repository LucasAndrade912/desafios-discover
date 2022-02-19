import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from '@chakra-ui/react';

const PriceValue = ({ children }) => {
  return (
    <Heading fontSize="2rem" mt="20px">
      {children}
    </Heading>
  );
};

PriceValue.propTypes = {
  children: PropTypes.string.isRequired
};

export default PriceValue;