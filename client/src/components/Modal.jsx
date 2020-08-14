/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalMainView from './ModalMainView';
import ModalThumbnailCarousel from './ModalThumbnailCarousel';

const Modal = (props) => {
  const {
    images,
    currentImage,
    showModal,
    setShowModal,
  } = props;
  const [hidden, setHidden] = useState(true);
  const [modalImage, setModalImage] = useState(currentImage);

  const toggleModal = () => {
    if (hidden) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      setHidden(false);
    } else {
      document.getElementsByTagName('body')[0].style.overflow = '';
      setShowModal(false);
      setHidden(true);
    }
  };

  const changeImage = (event) => {
    let { id } = event.target;

    id = id.split('-');
    id = id.pop();

    setModalImage(images[id]);
  };

  if (showModal) {
    if (hidden) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      setHidden(false);
    }
  }

  window.onclick = (event) => {
    if (event.target.tagName !== 'IMG' && hidden === false) {
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
    >
      <button type="button" className="btn btn-close-modal">
        <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z" />
        </svg>
      </button>
      <div className="modal-content">
        <ModalMainView images={images} currentImage={modalImage} />
        <ModalThumbnailCarousel images={images} onClickHandler={changeImage} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentImage: PropTypes.objectOf(PropTypes.string).isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;
