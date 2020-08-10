/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const MainView = (props) => {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState('');

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
            className="main-image hidden"
            alt="product"
            src={image.full}
          />
        ))}
      </div>
    );
  }
};

export default MainView;
