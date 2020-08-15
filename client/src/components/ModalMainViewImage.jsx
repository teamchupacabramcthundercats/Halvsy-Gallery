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
    <li>
      <img
        id={`main${counter}`}
        className="modal-main-image"
        style={{
          display,
          borderRadios: '6px',
        }}
        alt="product"
        src={image.full}
        onClick={undefined}
        onKeyPress={undefined}
      />
    </li>
  );
};

ModalMainViewImage.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  counter: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired,
};

export default ModalMainViewImage;
