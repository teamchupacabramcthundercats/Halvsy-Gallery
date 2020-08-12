/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import useCurrentImage from '../hooks/useCurrentImage';

const ThumbnailListItem = (props) => {
  const { image, id, onClickHandler } = props;
  const thumbId = `thumbnail-${id}`;

  return (
    <li>
      <img
        id={thumbId}
        src={image.thumbnail}
        alt="thumbnail"
        onClick={onClickHandler}
      />
    </li>
  );
};

export default ThumbnailListItem;
