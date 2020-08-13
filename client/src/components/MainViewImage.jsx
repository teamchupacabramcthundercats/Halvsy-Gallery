/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const MainViewImage = (props) => {
  const {
    image, counter, display, onClickHandler,
  } = props;

  return (
    <img
      id={`main${counter}`}
      className="main-image"
      style={{
        display,
        width: 'auto',
        height: 'auto',
      }}
      alt="product"
      src={image.full}
      onClick={onClickHandler}
      onKeyPress={onClickHandler}
    />
  );
};

MainViewImage.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  counter: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};

MainViewImage.defaultProps = {
  onClickHandler: undefined,
};

export default MainViewImage;
