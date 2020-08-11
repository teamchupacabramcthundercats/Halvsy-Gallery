/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import MainViewImage from './MainViewImage';

const MainView = (props) => {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(images[0]);
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
              visibility="visible"
            />
          );
        } else {
          return (
            <MainViewImage
              key={counter++}
              counter={counter}
              image={image}
              visibility="hidden"
            />
          );
        }
      })}
    </div>
  );
};

export default MainView;
