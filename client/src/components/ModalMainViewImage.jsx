/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const ModalMainViewImage = (props) => {
  const {
    image,
    counter,
    display,
  } = props;

  return (
    <img
      id={`main${counter}`}
      className="modal-main-image"
      style={{
        display,
        width: 'auto',
        height: 'auto',
      }}
      alt="product"
      src={image.full}
      onClick={undefined}
      onKeyPress={undefined}
    />
  );
};

ModalMainViewImage.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  counter: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired,
};

export default ModalMainViewImage;
