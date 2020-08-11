/* eslint-disable react/no-array-index-key */
import React from 'react';
import ThumbnailListItem from './ThumbnailListItem';

const ThumbnailList = (props) => {
  const { images } = props;

  return (
    <ul className="thumbnail-list flex-container">
      {images.map((image, key) => (
        <ThumbnailListItem key={`tn-${key}`} id={key} image={image} />
      ))}
    </ul>
  );
};

export default ThumbnailList;
