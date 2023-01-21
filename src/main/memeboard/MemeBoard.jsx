import React from 'react';

const MemeBoard = props => {

    const { photos } = props;

    const upper_photos = photos.slice(0,18);
    const lower_photos = photos.slice(18);

    const makePhotoBoard = (list) => {
        return list.map((photo, key) => (
            <div className='meme-photo-div' key={key+"_div"}>
                <img src={photo.url} alt="meme" key={key+"_photo"} className="meme-board-photo"/>
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
            </div>
        ));
    }

    return (
        <div className='meme-board-div'>
            <div className='meme-format'>
                {
                    photos !== undefined ?
                    makePhotoBoard(upper_photos) : null
                }
                {props.children}
                {
                    photos !== undefined ?
                    makePhotoBoard(lower_photos) : null
                }
            </div>
        </div>
    );
};

export default MemeBoard;