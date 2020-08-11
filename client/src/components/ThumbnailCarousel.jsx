import React, { useState, useEffect } from 'react';
import ThumbnailList from './ThumbnailList';

const ThumbnailCarousel = (props) => {
  const { images } = props;

  return (
    <div
      className="thumbnail-carousel-container flex-container"
    >
      <ThumbnailList images={images} />
    </div>
  );
};

export default ThumbnailCarousel;
