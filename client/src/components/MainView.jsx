/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import MainViewImage from './MainViewImage';
import { clamp } from '../../../utils/client/clamp';

const MainView = (props) => {
  const {
    images,
    currentImage,
    setCurrentImage,
    onClickToShowModal,
    isFavorite,
    toggleFavorite,
  } = props;
  let favClass = '';
  let hidden = '';
  let counter = 0;

  if (isFavorite) {
    favClass = 'g-btn-fav-true';
    hidden = 'g-btn-hidden-fav';
  }

  const onClickHandler = (event) => {
    const { id } = event.target;
    let currentIndex = images.indexOf(currentImage);

    if (id === 'main-left-arrow') {
      currentIndex = clamp(currentIndex - 1, 0, images.length - 1);
      setCurrentImage(images[currentIndex]);
    } else {
      currentIndex = clamp(currentIndex + 1, 0, images.length - 1);
      setCurrentImage(images[currentIndex]);
    }
  };

  return (
    <div className="main-view">
      <div className="main-view-content round-corners">
        {images.map((image) => {
          if (image === currentImage) {
            return (
              <MainViewImage
                key={counter++}
                counter={counter}
                image={image}
                display="main-image-visible"
                onClickHandler={onClickToShowModal}
              />
            );
          } else {
            return (
              <MainViewImage
                key={counter++}
                counter={counter}
                image={image}
                display=""
              />
            );
          }
        })}
      </div>
      <button
        id="main-left-arrow"
        aria-label="Previous Image"
        type="button"
        className="g-btn g-btn-nav g-btn-vert-center g-btn-left"
        onClick={onClickHandler}
      >
        <svg style={{ pointerEvents: 'none' }} className="close-icon g-btn-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path style={{ pointerEvents: 'none' }} className="g-btn-nav" d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z" />
        </svg>
      </button>
      <button
        id="main-right-arrow"
        aria-label="Next Image"
        type="button"
        className="g-btn g-btn-nav g-btn-vert-center g-btn-right"
        onClick={onClickHandler}
      >
        <svg style={{ pointerEvents: 'none' }} className="close-icon g-btn-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path style={{ pointerEvents: 'none' }} className="g-btn-nav" d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z" />
        </svg>
      </button>
      <button type="button" aria-label="Add Favorite" className="g-btn g-btn-nav g-btn-fav" onClick={toggleFavorite}>
        <svg className={`g-btn-hidden-fav ${favClass}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" />
        </svg>
        <svg className={`${hidden}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" />
        </svg>
      </button>
    </div>
  );
};

MainView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentImage: PropTypes.objectOf(PropTypes.string).isRequired,
  setCurrentImage: PropTypes.func.isRequired,
  onClickToShowModal: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default MainView;
