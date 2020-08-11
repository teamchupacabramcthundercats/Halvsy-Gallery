/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const MainView = (props) => {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(images[0]);
  let counter = 0;

  return (
    <div className="main-view">
      {images.map((image) => {
        if (image === currentImage) {
          return (
            <img
              key={counter++}
              id={`main${counter}`}
              className="main-image"
              style={{ visibility: 'visible' }}
              alt="product"
              src={image.full}
            />
          );
        } else {
          return (
            <img
              key={counter++}
              id={`main${counter}`}
              className="main-image"
              style={{ visibility: 'hidden' }}
              alt="product"
              src={image.full}
            />
          );
        }
      })}
    </div>
  );
};

export default MainView;
