import React, { useState } from 'react';
import { useEffect } from 'react';
import {BsSearch} from 'react-icons/bs';
import { useNavigate } from 'react-router';
import AutoComplete from './AutoComplete';

const Search = props => {

    const sampleList = [
        '박명수',
        '박명수 무한도전',
        '박명수 퇴사',
        '아이들',
        '아이들 우기',
        '아이들 소연',
        '아이들 미연',
        '마마무',
        '아이들 톰보이',
        '아이들 Uh-Oh',
        '아이들 싫다고 말해',
        '아이들 Lion',
        '아이들 라타타',
        '아이들 한',
        '아이들 덤디덤디'
    ];

    const navigate = useNavigate();

    const [keywords, setKeywords] = useState([]);

    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (props.keyword) {
            setKeyword(props.keyword);
        }
    }, []);

    const onChange = e => {
        const text = e.target.value;
        if (text !== undefined && text.length > 0) {
            const matches = sampleList.filter(sample => sample.startsWith(text));
            setKeywords(matches);
            setKeyword(text);
        } else {
            setKeywords([]);
        }
    }

    const findKeyword = () => {
        props.setSearchKeyword(keyword);
        navigate("/search");
    }

    return (
        <div className="search">
            <div className="search-left-div">
                <p className="search-label">웹사이트 이름</p>
            </div>
            <div className="search-center-div">
                <BsSearch className='search-button'
                    onClick={findKeyword}/>
                <input className="search-input" onChange={onChange}/>
                <AutoComplete 
                keywords={keywords}
                keyword={keyword}
                />
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