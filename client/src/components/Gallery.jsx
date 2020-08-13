/* eslint-disable no-else-return */
import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainView from './MainView';
import ThumbnailCarousel from './ThumbnailCarousel';
import Modal from './Modal';

const Gallery = (props) => {
  const { productId } = props;
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, { product: undefined, currentMainView: undefined });
  const [showModal, setShowModal] = useState(false);

  const onClickToShowModal = () => {
    setShowModal(true);
  };

  const onThumbnailClick = (event) => {
    let { id } = event.target;
    const { images } = state.product;

    id = id.substr(-1);

    setState({ currentMainView: images[id] });
  };

  if (state.product === undefined) {
    axios.get(`/api/images/${productId}`)
      .then((response) => {
        const { images } = response.data;
        setState({ product: response.data, currentMainView: images[0] });
      })
      .catch((err) => {
        console.log(err);
      });

    return (
      <div className="gallery flex-container">
        <div className="modal" style={{ display: 'none' }} />
        <div className="thumbnail-carousel" onClickHandler={onThumbnailClick} style={{ display: 'none' }} />
        <div className="main-view" onClickToShowModal={onClickToShowModal} style={{ display: 'none' }} />
        Loading...
      </div>
    );
  } else {
    const { images } = state.product;

    return (
      <div className="gallery flex-container">
        <Modal
          images={images}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <ThumbnailCarousel
          images={images}
          onClickHandler={onThumbnailClick}
        />
        <MainView
          images={images}
          currentImage={state.currentMainView}
          onClickToShowModal={onClickToShowModal}
        />
      </div>
    );
  }
};

Gallery.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Gallery;
