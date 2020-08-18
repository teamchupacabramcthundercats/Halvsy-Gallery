/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const ThumbnailListItem = (props) => {
  const {
    image,
    id,
    onClickHandler,
    classes,
  } = props;
  const thumbId = `thumbnail-${id}`;

  return (
    <li className={`thumbnail-list-item round-corners ${classes}`}>
      <img
        id={thumbId}
        className="thumbnail-list-img"
        src={image.thumbnail}
        alt="thumbnail"
        onClick={onClickHandler}
      />
    </li>
  );
};

ThumbnailListItem.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  classes: PropTypes.string.isRequired,
};

export default ThumbnailListItem;
