/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainView from './MainView';
import ThumbnailCarousel from './ThumbnailCarousel';

const Gallery = (props) => {
  const { productId } = props;
  const [product, setProduct] = useState(undefined);
  const [currentMainView, setCurrentMainView] = useState(undefined);

  const onThumbnailClick = (event) => {
    let { id } = event.target;
    const { images } = product;

    id = id.substr(-1);

    setCurrentMainView(images[id]);
  };

  const processResponse = (product) => {
    const { images } = product;
    setProduct(product);
    setCurrentMainView(images[0]);
  };

  if (product === undefined) {
    axios.get(`/api/images/${productId}`)
      .then((response) => {
        processResponse(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return (
      <div className="gallery flex-container">
        Loading...
      </div>
    );
  } else {
    const { images } = product;

    return (
      <div className="gallery flex-container">
        <ThumbnailCarousel
          images={images}
          onClickHandler={onThumbnailClick}
        />
        <MainView
          images={images}
          currentImage={currentMainView}
        />
      </div>
    );
  }
};

Gallery.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Gallery;
