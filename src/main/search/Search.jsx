import React from 'react';
import '../../css/search.css';
import {BsSearch} from 'react-icons/bs';

const Search = () => {
    return (
        <div className="search">
            <div className="search-left-div">
                <p className="search-label">웹사이트 이름</p>
            </div>
            <div className="search-center-div">
                <input className="search-input"/>
                <div className='search-button-div'>
                    <BsSearch className='search-button'/>
                </div>
            </div>
            <div className="search-right-div">
                <button className="add-button">
                    추가하기
                </button>
            </div>
        </div>
    );
};

export default Search;