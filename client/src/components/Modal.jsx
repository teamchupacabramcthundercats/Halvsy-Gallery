/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const Modal = (props) => {
  const onClickHandler = () => {
    let modal = document.getElementById('modal');
  };

  return (
    <div
      id="modal"
      className="modal"
      onClick={onClickHandler}
      onKeyPress={onClickHandler}
    >
      Placeholder Text.
    </div>
  );
};

Modal.propTypes = {

};

export default Modal;
