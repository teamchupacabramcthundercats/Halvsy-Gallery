/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { images, showModal, setShowModal } = props;
  const [hidden, setHidden] = useState(true);

  if (showModal) {
    if (hidden) {
      setHidden(false);
    }
  }

  const onClickHandler = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setShowModal(false);
      setHidden(true);
    }
  };

  if (hidden) {
    return (
      <div
        id="modal"
        className="modal hidden-modal"
        onClick={onClickHandler}
        onKeyPress={onClickHandler}
      >
        <div className="flex-container">
          <div>Placeholder modal main view div</div>
          <div>Placeholder modal thumbnail carousel div</div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="modal"
      className="modal"
      onClick={onClickHandler}
      onKeyPress={onClickHandler}
    >
      <div className="flex-container">
        <div>Placeholder modal main view div</div>
        <div>Placeholder modal thumbnail carousel div</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;
