import React, { Fragment, useState, useEffect } from 'react';
import SortTypeToggle from './SortTypeToggle';
import Top3Memes from './Top3Memes';
import MemeBoard from './../memeboard/MemeBoard';
import Collage from './../collage/Collage';
import MemeDetail from '../memeboard/MemeDetail';
import { useParams } from 'react-router';

const SearchResultMain = props => {

  const [toggleType, setToggleType] = useState('recent');

  const searchKeyword = "";
  const params = useParams();

  const [memes, setMemes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState({});

  useEffect(() => {
    console.log("searchKeyword : " + params.searchKeyword);
    if (memes === undefined || memes.length === 0) {
      let array = [];
      for (let i = 0;i<30;i++) {
        array.push({
            name : 'yuqi',
            url : 'images/yuqi.jpg',
            createAt : '2022.08.29',
                download : 300,
                viewCnt : 100,
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
        for (let i = 0;i<30;i++) {
          array.push({
              name : 'yuqi',
              url : 'images/yuqi.jpg',
              createAt : '2022.08.29',
                download : 300,
                viewCnt : 100,
              tags : [
                  '우기',
                  '푸들',
                  '아이들',
                  '반전목소리'
              ]
          });
        }
      } else {
        for (let i = 0;i<30;i++) {
          array.push({
              name : 'yuqi',
              url : 'images/soyeon.jpg',
              createAt : '2022.08.29',
                download : 300,
                viewCnt : 100,
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
      <MemeBoard photos={memes}
        setSelectedMeme={setSelectedMeme}
        setOpenModal={setOpenModal}>
        <Collage />
      </MemeBoard>
      {   
        openModal &&
        <MemeDetail meme={selectedMeme} 
          openModal={openModal}
          setOpenModal={setOpenModal} />
      }
    </Fragment>
  );
};

export default SearchResultMain;