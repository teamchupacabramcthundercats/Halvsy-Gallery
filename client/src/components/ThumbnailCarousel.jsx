import React, { useState, useEffect } from 'react';
import ThumbnailList from './ThumbnailList';
import PropTypes from 'prop-types';

const ThumbnailCarousel = (props) => {
  const { images, onClickHandler } = props;
  const firstImageId = 'thumbnail-0';
  const lastImageId = `thumbnail-${images.length - 1}`;

  const onMouseOverHandler = (direction) => {
    const firstImage = document.getElementById(firstImageId);
    const lastImage = document.getElementById(lastImageId);

    if (direction === 'up') {
      firstImage.scrollIntoView({ behavior: 'smooth' });
    } else {
      lastImage.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="thumbnail-carousel-container flex-container"
    >
      <div
        className="thumbnail-scroll-up"
        onMouseOver={() => onMouseOverHandler('up')}
        onFocus={() => onMouseOverHandler('up')}
      />
      <ThumbnailList
        images={images}
        onClickHandler={onClickHandler}
      />
      <div
        className="thumbnail-scroll-down"
        onMouseOver={() => onMouseOverHandler('down')}
        onFocus={() => onMouseOverHandler('down')}
      />
    </div>
  );
};

export default ThumbnailCarousel;
