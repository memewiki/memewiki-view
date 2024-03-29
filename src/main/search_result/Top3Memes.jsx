import React, {useEffect} from 'react';

const Top3Memes = props => {

    useEffect(() => {

    }, []);

    return (
        <div id="top-3-memes-div">
            {
                props.memes !== undefined ?
                props.memes.map((photo, key) => (
                    <div className='top3-photo-div' key={key+"_div"}>
                        <img src={`${process.env.PUBLIC_URL}/${photo.url}`} alt="meme" key={key+"_photo"} className="top3-photo"/>
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
                )) : null
            }
        </div>
    );
};

export default Top3Memes;