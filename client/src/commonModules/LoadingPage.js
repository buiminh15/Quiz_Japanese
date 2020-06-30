import React from 'react';
import LoadingImg from '../commonImgs/giphycolor.gif';

export default () => {
  const LoadingStyle = {};
  return (
    <div style={{ width: '100%' }} className="mt-3 mb-3">
      <img src={LoadingImg} style={{ margin: 'auto', display: 'block' }} />
    </div>
  );
};
