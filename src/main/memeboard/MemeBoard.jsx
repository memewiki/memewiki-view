import React, { useState, useEffect } from 'react';
import Meme from './Meme';

const MemeBoard = props => {

    const [photos, setPhotos] = useState([]);

    const [upper_photos, setUpperPhotos] = useState([]);
    const [lower_photos, setLowerPhotos] = useState([]);

    useEffect(() => {
        setPhotos(props.photos);
    }, [props.photos]);

    useEffect(() => {
        if (photos && Array.isArray(photos)) {
            setUpperPhotos(photos.slice(0, 12));
            setLowerPhotos(photos.slice(12));
        }
    }, [photos])

    const makePhotoBoard = (list) => {
        return list.map((photo, key) => (
            <Meme photo={photo} 
                key={key} 
                setSelectedMeme={props.setSelectedMeme} 
                setOpenModal={props.setOpenModal} />
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