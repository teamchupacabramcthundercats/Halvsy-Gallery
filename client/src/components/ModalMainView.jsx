/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import ModalMainViewImage from './ModalMainViewImage';
import { clamp } from '../../../utils/client/clamp';

const ModalMainView = (props) => {
  const { images, currentImage, setCurrentImage } = props;
  let counter = 0;

  const onClickHandler = (event) => {
    const { id } = event.target;
    let currentIndex = images.indexOf(currentImage);

    if (id === 'modal-left-arrow') {
      currentIndex = clamp(currentIndex - 1, 0, images.length - 1);
      setCurrentImage(images[currentIndex]);
    } else {
      currentIndex = clamp(currentIndex + 1, 0, images.length - 1);
      setCurrentImage(images[currentIndex]);
    }
  };

  return (
    <div className="modal-main-view inner-modal">
      <ul className="modal-main-view-list">
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
      </ul>
      <button
        id="modal-left-arrow"
        type="button"
        className="btn btn-nav btn-vert-center btn-left"
        onClick={onClickHandler}
      >
        <svg style={{ pointerEvents: 'none' }} className="close-icon btn-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path style={{ pointerEvents: 'none' }} className="btn-nav" d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z" />
        </svg>
      </button>
      <button
        id="modal-right-arrow"
        type="button"
        className="btn btn-nav btn-vert-center btn-right"
        onClick={onClickHandler}
      >
        <svg style={{ pointerEvents: 'none' }} className="close-icon btn-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path style={{ pointerEvents: 'none' }} className="btn-nav" d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z" />
        </svg>
      </button>
    </div>
  );
};

ModalMainView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentImage: PropTypes.objectOf(PropTypes.string).isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default ModalMainView;
