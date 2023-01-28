import React from 'react';

const MemeDetail = props => {

  const meme = props.meme;

  return (
    <div id="meme-detail-outer-div">
      <div id="meme-detail-div">
        <img src={meme.url} alt="meme" className="meme-board-photo"/>
      </div>
    </div>
  );
};

export default MemeDetail;