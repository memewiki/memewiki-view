import React, { useState } from 'react';
import '../../css/search.css';
import {BsSearch} from 'react-icons/bs';
import AutoComplete from './AutoComplete';

const Search = () => {

    const sampleList = [
        '박명수',
        '박명수 무한도전',
        '박명수 퇴사',
        '아이들',
        '아이들 우기',
        '아이들 소연',
        '아이들 미연',
        '마마무'
    ];

    const [keywords, setKeywords] = useState([]);

    const [keyword, setKeyword] = useState('아이들');

    const onChange = e => {
        const text = e.target.value;
        if (text !== undefined && text.length > 0) {
            const matches = sampleList.filter(sample => sample.startsWith(text));
            setKeywords(matches);
        } else {
            setKeywords([]);
        }
    }

    return (
        <div className="search">
            <div className="search-left-div">
                <p className="search-label">웹사이트 이름</p>
            </div>
            <div className="search-center-div">
                <BsSearch className='search-button'/>
                <input className="search-input" onChange={onChange}/>
                <AutoComplete keywords={keywords} />
            </div>
            <div className="search-right-div">
                <button className="add-button">
                    추가하기
                </button>
            </div>
        </div>
    );
};

export default React.memo(Search);