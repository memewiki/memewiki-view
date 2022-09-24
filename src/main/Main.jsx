import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import ChoiceTags from './memeboard/ChoiceTags';
import PopularMeme from './memeboard/PopularMeme';
import Search from './search/Search';

const Main = () => {

    const [popularMemePhotos, setPopularMemePhotos] = useState([]);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        let array = [];

        for (let i = 0;i<10;i++) {
            array.push({
                name : 'yuqi',
                url : 'images/yuqi.jpg'
            });
        }

        setPopularMemePhotos(array);

        setCategory('상황');
        setCategories(['상황', '기분']);
    },[]);

    return (
        <Fragment>
            <Search />
            <PopularMeme photos={popularMemePhotos}/>
            <ChoiceTags category={category} categories={categories} />
        </Fragment>
    );
};

export default Main;