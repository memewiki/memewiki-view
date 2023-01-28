import React from 'react';
import Meme from './Meme';

const MemeBoard = props => {

    const { photos } = props;

    const upper_photos = photos.slice(0,18);
    const lower_photos = photos.slice(18);

    const makePhotoBoard = (list) => {
        return list.map((photo, key) => (
            <Meme photo={photo} 
                key={key} 
                setSelectedMeme={props.setSelectedMeme} />
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