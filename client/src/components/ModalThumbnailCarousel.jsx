/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ModalThumbnailCarouselItem from './ModalThumbnailCarouselItem';

const ModalThumbnailCarousel = (props) => {
  const { images, onClickHandler } = props;

  return (
    <div className="modal-thumbnail-carousel flex-container">
      <ul className="modal-thumbnail-list flex-container">
        {images.map((image, key) => {
          let size;
          if ((key % 3) === 0) {
            size = 'thumb-lg';
          } else if ((key % 3) === 1) {
            size = 'thumb-sm thumb-l';
          }
          else {
            size = 'thumb-sm thumb-r';
          }

          return (
            <ModalThumbnailCarouselItem
              key={`tn-${key}`}
              id={key}
              sizeClass={size}
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
};

export default ModalThumbnailCarousel;
