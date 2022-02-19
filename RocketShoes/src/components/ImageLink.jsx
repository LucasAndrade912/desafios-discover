import React from 'react';
import PropTypes from 'prop-types'

import { Box, Image, Link } from '@chakra-ui/react'

const ImageLink = ({ src, alt }) => {
  return (
    <Box>
      <Link>
        <Image src={src} alt={alt} />
      </Link>
    </Box>
  );
};

ImageLink.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default ImageLink;