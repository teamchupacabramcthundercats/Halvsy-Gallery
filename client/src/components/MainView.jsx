/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const MainView = (props) => {
  const { images } = props;
  let [currentImage, setCurrentImage] = useState('');

  return (
    <div>
      {images.map((image) => <img className="main-image hidden" alt="product" src={image.full} /> )}
    </div>
  );
};

export default MainView;
