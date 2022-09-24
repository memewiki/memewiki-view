import React from 'react';
import '../../css/memeboard.css';

const PopularMeme = props => {

    const photos  = props.photos;

    return (
        <div className='meme-board-div'>
            <div className='meme-format'>
                {
                    photos !== undefined ?
                    photos.map((photo, key) => (
                        <img src={photo.url} alt="meme" key={key} className="meme-photo"/>
                    )) : null
                }
            </div>
        </div>
    );
};

export default PopularMeme;