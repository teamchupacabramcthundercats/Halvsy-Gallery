import React from 'react';

const MainViewImage = (props) => {
  const { image, counter, visibility } = props;
  return (
    <img
      id={`main${counter}`}
      className="main-image"
      style={{
        visibility,
        width: 'auto',
        height: 'auto',
      }}
      alt="product"
      src={image.full}
    />
  );
};

export default MainViewImage;
