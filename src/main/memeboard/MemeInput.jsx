import React, { useEffect, useState } from 'react';
import { AiFillPicture } from "react-icons/ai";

const MemeInput = props => {

    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
      setDomReady(true);
    }, [])
  
    const closeModal = () => {
      setDomReady(false);
      props.setOpenModal(undefined);
    }

    return domReady && (
        <div className="meme-modal-outer-div">
            <div className="meme-modal-div">
                <button className="meme-modal-close-btn"
                    onClick={closeModal}>X</button>
                <div id="meme-image-drag-div">
                    <AiFillPicture id='meme-image-drag-icon' />
                    <p>여기로 이미지를 드래그하거나 파일을 업로드 하세요.</p>
                </div>
                <div id="meme-input-tag-upload-div">
                    <textarea placeholder='등록할 짤을 설명할 수 있는 태그를 입력하세요.' />
                    <button>업로드</button>
                </div>
            </div>
        </div>
    );
};

export default MemeInput;