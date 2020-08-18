/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailList from './ThumbnailList';

const ThumbnailCarousel = (props) => {
  const { images, onClickHandler, currentImage } = props;
  const firstImageId = 'thumbnail-0';
  const lastImageId = `thumbnail-${images.length - 1}`;

  const onMouseOverHandler = (direction) => {
    const firstImage = document.getElementById(firstImageId);
    const lastImage = document.getElementById(lastImageId);

    if (direction === 'up') {
      firstImage.scrollIntoView({ behavior: 'smooth' });
    } else {
      lastImage.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  const onScrollDivClick = (event) => {
    const { target } = event;
    const originalStyle = target.style.display;

    target.style.display = 'none';
    document.elementFromPoint(event.clientX, event.clientY).click();
    target.style.display = originalStyle;
  };

  return (
    <div
      className="thumbnail-carousel-container flex-container"
    >
      <div
        className="thumbnail-scroll-up"
        onMouseOver={() => onMouseOverHandler('up')}
        onFocus={() => onMouseOverHandler('up')}
        onClick={onScrollDivClick}
        onKeyPress={onScrollDivClick}
      />
      <ThumbnailList
        images={images}
        currentImage={currentImage}
        onClickHandler={onClickHandler}
      />
      <div
        className="thumbnail-scroll-down"
        onMouseOver={() => onMouseOverHandler('down')}
        onFocus={() => onMouseOverHandler('down')}
        onClick={onScrollDivClick}
        onKeyPress={onScrollDivClick}
      />
    </div>
  );
};

ThumbnailCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  currentImage: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ThumbnailCarousel;
