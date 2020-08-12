/* eslint-disable react/no-array-index-key */
import React from 'react';
import ThumbnailListItem from './ThumbnailListItem';
import PropTypes from 'prop-types';

const ThumbnailList = (props) => {
  const { images, onClickHandler } = props;

  return (
    <ul className="thumbnail-list flex-container">
      {images.map((image, key) => (
        <ThumbnailListItem
          key={`tn-${key}`}
          id={key}
          image={image}
          onClickHandler={onClickHandler}
        />
      ))}
    </ul>
  );
};

export default ThumbnailList;
