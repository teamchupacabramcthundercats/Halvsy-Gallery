/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailListItem from './ThumbnailListItem';

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

ThumbnailList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default ThumbnailList;
