/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import ModalMainViewImage from './ModalMainViewImage';

const ModalMainView = (props) => {
  const { images, currentImage } = props;
  let counter = 0;

  return (
    <div className="modal-main-view">
      {images.map((image) => {
        if (image === currentImage) {
          return (
            <ModalMainViewImage
              key={counter++}
              counter={counter}
              image={image}
              display="inline-block"
            />
          );
        }
        return (
          <ModalMainViewImage
            key={counter++}
            counter={counter}
            image={image}
            display="none"
          />
        );
      })}
    </div>
  );
};

ModalMainView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentImage: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ModalMainView;
