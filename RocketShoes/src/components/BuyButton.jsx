import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@chakra-ui/react';

const BuyButton = ({ children }) => {
  return (
    <Button
      mt="20px"
      width="85%"
      height="60px"
      borderRadius="0"
      bgColor="#FF0000"
      color="#FFF"
      _focus={{ border: "none" }}
      _hover={{ bgColor: "#f50000" }}
    >
      {children}
    </Button>
  );
};

BuyButton.propTypes = {
  children: PropTypes.string.isRequired
};

export default BuyButton;