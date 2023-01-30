import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const MemeDetail = props => {

  const meme = props.meme;

  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    console.log("meme : " + JSON.stringify(meme));
    setDomReady(true);
  }, [])

  const closeMemeDetail = () => {
    setDomReady(false);
    props.setOpenModal(false);
  }

  return domReady && meme !== undefined && (
    <div id="meme-detail-outer-div">
      <div id="meme-detail-div">
        <button id="meme-detail-close-btn"
          onClick={closeMemeDetail}>X</button>
        <div id="meme-detail-img-div">
          <img src={meme.url} alt="meme" id="meme-detail-photo"/>
        </div>
        <div id="meme-detail-btn-div">
          <div id="meme-detail-like-btn-div">
            <div id="meme-detail-heart-div">
              💓
            </div>
          </div>
          <div id="meme-detail-download-btn-div">
            <button id="meme-detail-download-btn">
              다운로드
            </button>
          </div>
          <div id="meme-detail-info-div">
            <div className='meme-detail-info-inner-div'>
              <p className="meme-detail-info first-info">
                {meme.createAt}
              </p>
            </div>
            <div className='meme-detail-info-inner-div'>
              <p className="meme-detail-info second-info">
                다운로드 {meme.download} 
              </p>
            </div>
            <div className='meme-detail-info-inner-div'>
              <p className="meme-detail-info third-info">
                조회수 {meme.viewCnt} 
              </p>
            </div>
          </div>
        </div>
        <div id="meme-detail-marquee-div">
          <p>
          {
            meme.tags && meme.tags.length > 0 ?
            meme.tags.map((tag, key) => '#'+tag+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0') : null
          }
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemeDetail;