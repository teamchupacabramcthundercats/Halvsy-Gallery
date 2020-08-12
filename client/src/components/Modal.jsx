/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

const Modal = (props) => {
  const { images } = props;
  const [hidden, setHidden] = useState(true);

  const onClickHandler = () => {
    if (hidden) {
      setHidden(false);
    } else {
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

};

export default Modal;
