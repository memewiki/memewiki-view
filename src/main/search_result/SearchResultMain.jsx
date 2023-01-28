import React, { Fragment, useState, useEffect } from 'react';
import SortTypeToggle from './SortTypeToggle';
import Top3Memes from './Top3Memes';

const SearchResultMain = props => {

  const [toggleType, setToggleType] = useState('recent');

  const [memes, setMemes] = useState([]);

  useEffect(() => {
    if (memes === undefined || memes.length === 0) {
      let array = [];
      for (let i = 0;i<10;i++) {
        array.push({
            name : 'yuqi',
            url : 'images/yuqi.jpg',
            tags : [
                '우기',
                '푸들',
                '아이들',
                '반전목소리'
            ]
        });
      }
      setMemes(array);
    } else {
      let array = [];
      if (toggleType === 'recent') {
        for (let i = 0;i<10;i++) {
          array.push({
              name : 'yuqi',
              url : 'images/yuqi.jpg',
              tags : [
                  '우기',
                  '푸들',
                  '아이들',
                  '반전목소리'
              ]
          });
        }
      } else {
        for (let i = 0;i<10;i++) {
          array.push({
              name : 'yuqi',
              url : 'images/soyeon.jpg',
              tags : [
                  '소연',
                  '리더',
                  '아이들',
                  '최강래퍼'
              ]
          });
        }
      }
      setMemes(array);
    }
  },[toggleType]);

  return (
    <Fragment>
      <SortTypeToggle 
        toggleType={toggleType}
        setToggleType={setToggleType} />
      <Top3Memes memes={memes.slice(0,3)} />
    </Fragment>
  );
};

export default SearchResultMain;