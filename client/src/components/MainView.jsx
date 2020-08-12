/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import MainViewImage from './MainViewImage';

const MainView = (props) => {
  const { images, currentImage } = props;
  let counter = 0;

  return (
    <div className="main-view">
      {images.map((image) => {
        if (image === currentImage) {
          return (
            <MainViewImage
              key={counter++}
              counter={counter}
              image={image}
              display="inline-block"
            />
          );
        } else {
          return (
            <MainViewImage
              key={counter++}
              counter={counter}
              image={image}
              display="none"
            />
          );
        }
      })}
    </div>
  );
};

export default MainView;
