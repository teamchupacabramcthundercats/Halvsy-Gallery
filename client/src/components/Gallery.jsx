import React, { useState } from 'react';
import axios from 'axios';

const Gallery = (props) => {
  const { productId } = props || 1;
  const product = axios.get(`/api/images/${productId}`);
  const { images } = product;

  return (
    <div className="gallery">
      This is sample text.
    </div>
  );
};

export default Gallery;
