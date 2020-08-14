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

  if (showModal) {
    if (hidden) {
      setHidden(false);
    }
  }

  const toggleModal = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setShowModal(false);
      setHidden(true);
    }
  };

  useEffect(() => {
    window.onclick = (event) => {
      if (event.target.tagName !== 'IMG' && hidden === false) {
        toggleModal();
      }
    };
  });

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
    >
      <ModalMainView images={images} currentImage={currentImage} />
      <ModalThumbnailCarousel images={images} onClickHandler={setCurrentImage} />
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
