import React, { useState, useEffect } from 'react';

const MemeDetail = props => {

  const meme = props.meme;

  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, [])

  const closeModal = () => {
    setDomReady(false);
    props.setOpenModal(undefined);
  }

  return domReady && meme !== undefined && (
    <div className="meme-modal-outer-div">
      <div className="meme-modal-div">
        <button className="meme-modal-close-btn"
          onClick={closeModal}>X</button>
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
            <a id="meme-detail-download-btn" href={meme.url} download>
              다운로드
            </a>
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