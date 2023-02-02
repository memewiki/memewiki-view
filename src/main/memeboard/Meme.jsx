import React, { useRef, useState } from 'react';

const Meme = props => {

    const photo = props.photo;
    const downBtnRef = useRef();
    const likeBtnRef = useRef();
    const [hover, setHover] = useState(false);

    const showBtns = () => {
        downBtnRef.current.className = 'img-download-btn';
        likeBtnRef.current.className = 'img-like-btn';
        setHover(true);
    }

    const hideBtns = () => {
        downBtnRef.current.className = 'img-download-btn not-hover';
        likeBtnRef.current.className = 'img-like-btn not-hover';
        setHover(false);
    }

    const clickMeme = () => {
        props.setSelectedMeme(photo);
        props.setOpenModal('detail');
    }

    return (
        <div className='meme-photo-div'
            onMouseEnter={showBtns}
            onMouseLeave={hideBtns}>
            <img src={`${process.env.PUBLIC_URL}/${photo.url}`} alt="meme" className="meme-board-photo"
                onClick={clickMeme}/>
            <div className='meme-tags-div'>
            {
                photo.tags !== undefined ? 
                photo.tags.slice(0,3).map((tag, key) => (
                    <span className='meme-tag' key={key}>
                        {"#" + tag+" "}
                    </span>
                )) : null
            }
            {
                photo.tags !== undefined && photo.tags.length > 3 ?
                <span className='meme-tag'>{"+" + (photo.tags.length - 3)}</span> : null
            }
            </div>
            <button className='img-download-btn not-hover'
                ref={downBtnRef}
                disabled={!hover}>다운로드</button>
            <button className='img-like-btn not-hover'
                ref={likeBtnRef}
                disabled={!hover}>💓</button>
        </div>
    );
};

export default Meme;