import React from 'react';
import PropTypes from 'prop-types';

const ModalMainView = (props) => {
  const { images } = props;

  return (
    <div className="modal-main-view">
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

ModalMainView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ModalMainView;
