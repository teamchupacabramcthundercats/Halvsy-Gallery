/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ModalThumbnailCarouselItem from './ModalThumbnailCarouselItem';

const ModalThumbnailCarousel = (props) => {
  const { images, onClickHandler, currentImage } = props;

  return (
    <div className="modal-thumbnail-carousel flex-container">
      <ul className="modal-thumbnail-list flex-container">
        {images.map((image, key) => {
          let classes;
          if ((key % 3) === 0) {
            classes = 'thumb-lg';
          } else if ((key % 3) === 1) {
            classes = 'thumb-sm thumb-l';
          } else {
            classes = 'thumb-sm thumb-r';
          }
          if (image === currentImage) {
            classes += ' thumb-current';
          }

          return (
            <ModalThumbnailCarouselItem
              key={`tn-${key}`}
              id={key}
              sizeClass={classes}
              image={image}
              onClickHandler={onClickHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

ModalThumbnailCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  currentImage: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ModalThumbnailCarousel;
