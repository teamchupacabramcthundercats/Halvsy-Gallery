/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainView from './MainView';

const Gallery = (props) => {
  const { productId } = props;
  const [product, setProduct] = useState(undefined);

  if (product === undefined) {
    axios.get(`/api/images/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((err) => {
        console.log(err);
      });

    return (
      <div>
        Loading...
      </div>
    );
  } else {
    const { images } = product;

    return (
      <div className="gallery">
        <MainView images={images} />
      </div>
    );
  }
};

Gallery.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Gallery;
