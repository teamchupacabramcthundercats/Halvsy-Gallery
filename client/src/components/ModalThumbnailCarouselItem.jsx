/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const ModalThumbnailCarouselItem = (props) => {
  const {
    image,
    onClickHandler,
    id,
    sizeClass,
  } = props;

  return (
    <li>
      <img
        id={`thumbnail-${id}`}
        className={`round-corners modal-thumb-item ${sizeClass}`}
        src={image.small}
        alt="Product Thumbnail"
        onClick={onClickHandler}
        onKeyPress={onClickHandler}
      />
    </li>
  );
};

ModalThumbnailCarouselItem.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  sizeClass: PropTypes.string.isRequired,
};

export default ModalThumbnailCarouselItem;
