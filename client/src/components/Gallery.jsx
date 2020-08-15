/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  const [state, setState] = useReducer(reducer, {
    product: undefined,
    currentMainView: undefined,
    modalImage: undefined,
    isFavorite: false,
  });
  const [showModal, setShowModal] = useState(false);

  const onClickToShowModal = () => {
    setShowModal(true);
  };

  const onThumbnailClick = (event) => {
    let { id } = event.target;
    const { images } = state.product;

    id = id.split('-');
    id = id.pop();

    const image = images[id];

    setState({ currentMainView: image, modalImage: image });
  };

  const setModalImage = (image) => {
    setState({ modalImage: image });
  };

  const setCurrentImage = (image) => {
    setState({ currentMainView: image });
  };

  const toggleFavorite = () => {
    axios.patch(`/api/favorite/${state.product.id}`)
      .then(({ data }) => {
        const { isFavorite } = data;
        setState({ isFavorite });
      });
  };

  if (state.product === undefined) {
    axios.get(`/api/images/${productId}`)
      .then((response) => {
        const { images, isFavorite } = response.data;
        setState({
          product: response.data,
          currentMainView: images[0],
          modalImage: images[0],
          isFavorite,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return (
      <div className="gallery flex-container">
        <div className="modal" style={{ display: 'none' }} />
        <div className="thumbnail-carousel-container" onClick={onThumbnailClick} style={{ display: 'none' }} />
        <div className="main-view" onClick={onClickToShowModal} style={{ display: 'none' }} />
        Loading...
      </div>
    );
  } else {
    const { images } = state.product;

    return (
      <div className="gallery flex-container">
        <Modal
          images={images}
          currentImage={state.modalImage}
          setCurrentImage={setModalImage}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <ThumbnailCarousel
          currentImage={state.currentMainView}
          images={images}
          onClickHandler={onThumbnailClick}
        />
        <MainView
          images={images}
          currentImage={state.currentMainView}
          setCurrentImage={setCurrentImage}
          onClickToShowModal={onClickToShowModal}
          isFavorite={!!state.isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </div>
    );
  }
};

Gallery.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Gallery;
