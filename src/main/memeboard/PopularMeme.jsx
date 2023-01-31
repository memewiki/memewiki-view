import React from 'react';

const PopularMeme = props => {

    const photos  = props.photos;

    return (
        <div className='popular-meme-board-div'>
            <div className='popular-meme-format'>
                {
                    photos !== undefined ?
                    photos.map((photo, key) => (
                        <img src={`${process.env.PUBLIC_URL}/${photo.url}`} alt="meme" key={key} className="meme-photo"/>
                    )) : null
                }
            </div>
        </div>
    );
};

export default PopularMeme;