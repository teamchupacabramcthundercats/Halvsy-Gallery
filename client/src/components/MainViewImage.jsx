import React from 'react';
import PropTypes from 'prop-types';

const MainViewImage = (props) => {
  const { image, counter, display } = props;
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
    />
  );
};

MainViewImage.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  counter: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired,
};

export default MainViewImage;
