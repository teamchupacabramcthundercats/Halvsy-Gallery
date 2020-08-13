/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const ModalThumbnailCarouselItem = (props) => {
  const { image, onClickHandler, id } = props;

  return (
    <ul>
      <img
        id={`thumbnail-${id}`}
        src={image.small}
        alt="Product Thumbnail"
        onClick={onClickHandler}
        onKeyPress={onClickHandler}
      />
    </ul>
  );
};

ModalThumbnailCarouselItem.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ModalThumbnailCarouselItem;
