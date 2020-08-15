/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailListItem from './ThumbnailListItem';

const ThumbnailList = (props) => {
  const { images, onClickHandler, currentImage } = props;

  return (
    <ul className="thumbnail-list flex-container">
      {images.map((image, key) => {
        if (image === currentImage) {
          return (
            <ThumbnailListItem
              key={`tn-${key}`}
              id={key}
              image={image}
              classes="main-tn-current"
              onClickHandler={onClickHandler}
            />
          );
        }
        return (
          <ThumbnailListItem
            key={`tn-${key}`}
            id={key}
            image={image}
            classes="main-tn"
            onClickHandler={onClickHandler}
          />
        );
      })}
    </ul>
  );
};

ThumbnailList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default ThumbnailList;
