/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const MainView = (props) => {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(undefined);
  let counter = 0;

  useEffect(() => {
    if (images !== undefined) {
      setCurrentImage(images[0]);
    }
  });

  useEffect(() => {
    if (currentImage !== undefined) {
      const currentImageId = images.indexOf(currentImage) + 1;
      document.getElementById(`main${currentImageId}`).style.visibility = 'visible';
    }
  });

  if (images === undefined) {
    return (
      <div>
        Loading Images...
      </div>
    );
  } else {
    return (
      <div>
        {images.map((image) => (
          <img
            key={counter++}
            id={`main${counter}`}
            className="main-image hidden"
            style={{ visibility: 'hidden' }}
            alt="product"
            src={image.full}
          />
        ))}
      </div>
    );
  }
};

export default MainView;
