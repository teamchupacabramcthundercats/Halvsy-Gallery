import React from 'react';

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

export default MainViewImage;
