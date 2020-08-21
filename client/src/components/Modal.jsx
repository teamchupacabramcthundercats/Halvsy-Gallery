/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalMainView from './ModalMainView';
import ModalThumbnailCarousel from './ModalThumbnailCarousel';

const Modal = (props) => {
  const {
    images,
    currentImage,
    setCurrentImage,
    showModal,
    setShowModal,
  } = props;
  const [hidden, setHidden] = useState(true);

  const toggleModal = () => {
    if (hidden) {
      setHidden(false);
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      setShowModal(false);
      setHidden(true);
      document.getElementsByTagName('body')[0].style.overflow = '';
    }
  };

  const selectImage = (event) => {
    let { id } = event.target;

    id = id.split('-');
    id = id.pop();

    setCurrentImage(images[id]);
  };

  if (showModal) {
    if (hidden) {
      setHidden(false);
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
  }

  const onModalClick = (event) => {
    if ((event.target.tagName !== 'IMG' && !event.target.classList.contains('g-btn-nav')) && hidden === false) {
      toggleModal();
    }
  };

  if (hidden) {
    return (
      <div
        id="hidden-modal"
        className="modal hidden-modal"
        onClick={toggleModal}
        onKeyPress={toggleModal}
      />
    );
  }

  return (
    <div
      id="modal"
      className="modal"
      onClick={onModalClick}
      onKeyPress={onModalClick}
    >
      <button type="button" aria-label="Close Pop Up" className="g-btn g-btn-close-modal">
        <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z" />
        </svg>
      </button>
      <div className="modal-content">
        <ModalMainView
          images={images}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
        <ModalThumbnailCarousel
          images={images}
          onClickHandler={selectImage}
          currentImage={currentImage}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentImage: PropTypes.objectOf(PropTypes.string).isRequired,
  setCurrentImage: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;
