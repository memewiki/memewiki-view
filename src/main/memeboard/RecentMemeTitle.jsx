import React from 'react';
import { IoRefreshCircleOutline } from 'react-icons/io5';

const RecentMemeTitle = props => {
    return (
        <div className='recent-meme-div'>
            <div className='recent-meme title-row'>
                <p className='recent-meme title'>
                    최근 등록된 짤
                </p>
                <IoRefreshCircleOutline id='refresh-btn' 
                    onClick={()=> {props.fetchData(true)}}/>
            </div>
        </div>
    );
};

export default RecentMemeTitle;