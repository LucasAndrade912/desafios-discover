import React from 'react';
import PropTypes from 'prop-types';

import { Box, Image } from '@chakra-ui/react';

const Video = ({ src }) => {
  return (
    <Box cursor="pointer">
      <Image src={src} height="20vh" objectFit="cover" />
    </Box>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired
};

export default Video;