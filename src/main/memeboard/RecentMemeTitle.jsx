import React from 'react';
import { IoRefreshCircleOutline } from 'react-icons/io5';

const RecentMemeTitle = () => {
    return (
        <div className='recent-meme-div'>
            <div className='recent-meme title-row'>
                <p className='recent-meme title'>
                    최근 등록된 짤
                </p>
                <IoRefreshCircleOutline className='refresh-btn' />
            </div>
        </div>
    );
};

export default RecentMemeTitle;