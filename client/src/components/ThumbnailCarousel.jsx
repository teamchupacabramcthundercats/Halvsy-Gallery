import React, { useState, useEffect } from 'react';
import ThumbnailList from './ThumbnailList';

const ThumbnailCarousel = (props) => {
  const { images } = props;
  const outerContainerStyle = {
    'box-sizing': 'border-box',
    'scrollbar-width': 'none',
    overflow: 'scroll',
    width: '80px',
    height: '600px',
  };

  return (
    <div className="thumbnail-carousel-container" style={outerContainerStyle}>
      <ThumbnailList images={images} />
    </div>
  );
};

export default ThumbnailCarousel;
