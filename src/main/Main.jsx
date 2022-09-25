import React, { Fragment, useEffect, useState } from 'react';
import ChoiceTags from './memeboard/ChoiceTags';
import PopularMeme from './memeboard/PopularMeme';
import Search from './search/Search';

const Main = () => {

    const [popularMemePhotos, setPopularMemePhotos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState('아이돌');

    useEffect(() => {

        let array = [];

        for (let i = 0;i<10;i++) {
            array.push({
                name : 'yuqi',
                url : 'images/yuqi.jpg'
            });
        }

        setPopularMemePhotos(array);
        setCategories(['아이돌', '드라마']);
        setTags([
            {category : '아이돌', tag : '아이들'}, 
            {category : '아이돌', tag : '아이브'}, 
            {category : '아이돌', tag : 'Itzy'}, 
            {category : '아이돌', tag : 'CLC'}, 
            {category : '아이돌', tag : '우주소녀'}, 
            {category : '아이돌', tag : '에스파'}, 
            {category : '아이돌', tag : '레드벨벳'}, 
            {category : '아이돌', tag : '소녀시내'},
            {category : '아이돌', tag : '아이유'},
            {category : '아이돌', tag : '프로미스나인'},
            {category : '아이돌', tag : '이달의소녀'},
            {category : '아이돌', tag : '블랙핑크'},
            {category : '아이돌', tag : '모모랜드'},
            {category : '아이돌', tag : '마마무'},
            {category : '아이돌', tag : '에이핑크'},
            {category : '아이돌', tag : '다비치'},
            {category : '아이돌', tag : '라붐'},
            {category : '드라마', tag : '태양의후예'},
            {category : '드라마', tag : '수리남'},
            {category : '드라마', tag : '이상한 변호사 우영우'},
            {category : '드라마', tag : '주몽'},
            {category : '드라마', tag : '허준'},
            {category : '드라마', tag : '불멸의이순신'}]);
            console.log("Main useEffect");
    },[]);

    return (
        <Fragment>
            <Search />
            <PopularMeme photos={popularMemePhotos}/>
            <ChoiceTags 
                categories={categories}
                category={category}
                setCategory={setCategory}
                tags={tags}
            />
        </Fragment>
    );
};

export default Main;