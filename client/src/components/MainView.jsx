/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import MainViewImage from './MainViewImage';

const MainView = (props) => {
  const { images, currentImage, onClickToShowModal } = props;
  let counter = 0;

  return (
    <div className="main-view">
      {images.map((image) => {
        if (image === currentImage) {
          return (
            <MainViewImage
              key={counter++}
              counter={counter}
              image={image}
              display="inline-block"
              onClickHandler={onClickToShowModal}
            />
          );
        } else {
          return (
            <MainViewImage
              key={counter++}
              counter={counter}
              image={image}
              display="none"
            />
          );
        }
      })}
    </div>
  );
};

MainView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentImage: PropTypes.objectOf(PropTypes.string).isRequired,
  onClickToShowModal: PropTypes.func.isRequired,
};

export default MainView;
