import React from 'react';

const ThumbnailListItem = (props) => {
  const { image, id } = props;
  const thumbId = `thumbnail-${id}`;

  return (
    <li>
      <img id={thumbId} src={image.thumbnail} alt="thumbnail" />
    </li>
  );
};

export default ThumbnailListItem;
