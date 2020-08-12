import React, { useState, useEffect } from 'react';
import ThumbnailList from './ThumbnailList';

const ThumbnailCarousel = (props) => {
  const { images, onClickHandler } = props;

  return (
    <div
      className="thumbnail-carousel-container flex-container"
    >
      <ThumbnailList
        images={images}
        onClickHandler={onClickHandler}
      />
    </div>
  );
};

export default ThumbnailCarousel;
