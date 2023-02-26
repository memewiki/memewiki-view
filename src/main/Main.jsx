import React, { Fragment, useEffect, useState } from 'react';
import ChoiceTags from './memeboard/ChoiceTags';
import MemeBoard from './memeboard/MemeBoard';
import PopularMeme from './memeboard/PopularMeme';
import RecentMemeTitle from './memeboard/RecentMemeTitle'; 
import Collage from './collage/Collage';
import MemeRepository from './repository/MemeRepository';

const Main = props => {

    const [popularMemePhotos, setPopularMemePhotos] = useState([]);
    const [recentMemePhotos, setRecentMemePhotos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState('아이돌');
    const [pageCallCnt, setPageCallCnt] = useState(1);

    useEffect(() => {

        let array = [];
        let array2 = [];

        async function initData() {
            const result = await getRecentMemes();
            array2 = result.data;
            
            for (let meme of array2) {
                const imgData = await getImageUrl(meme.memeId);
    
                meme.url = imgData.data;
    
                const memeTagData = await getMemeTag(meme.memeId);
                let infos = [];
    
                if (memeTagData && memeTagData.status === 200) {
                    infos = memeTagData.data.data.tagMemeDetailResponses;
                    meme.tags = [];
                    infos.forEach(info => meme.tags.push(info.tagName));
                }
    
            }
    //
            setRecentMemePhotos(array2);
        }

        for (let i = 0;i<10;i++) {
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

        initData();

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
    },[]);

    useEffect(() => {
        console.log("recent meme : " + JSON.stringify(recentMemePhotos));
    }, [recentMemePhotos]);
//
    const updateState = (isReset) => {
       fetchData(isReset).then((result) => {
            setRecentMemePhotos([...result]);
            console.log("recent meme : " + JSON.stringify(recentMemePhotos));
        });
    }

    const fetchData = async(isReset) => {
        const result = await getRecentMemes();

        console.log("fetchData ------------------ start");

        let fetchDataList = undefined;

        if(!isReset) {
            const array = JSON.parse(JSON.stringify(recentMemePhotos));
            const array2 = result.data;

            fetchDataList = array.concat(array2);
        } else {
            fetchDataList = result.data;
        }
        
        for (let meme of fetchDataList) {
            const imgData = await getImageUrl(meme.memeId);

            meme.url = imgData.data;

            const memeTagData = await getMemeTag(meme.memeId);
            let infos = [];

            if (memeTagData && memeTagData.status === 200) {
                infos = memeTagData.data.data.tagMemeDetailResponses;
                meme.tags = [];
                infos.forEach(info => meme.tags.push(info.tagName));
            }

        }

        console.log("fetchData ------------------ end");
        return fetchDataList;
    }

    const getRecentMemes = async() => {
        const result = await MemeRepository.getRecentMemes(pageCallCnt+1);

        return result.data;
    }

    const getImageUrl = async(id) => {
        return await MemeRepository.getImageUrl(id);
    }

    const getMemeTag = async(id) => {
        return await MemeRepository.getMemeTag(id);
    }

    return (
        <Fragment>
            <PopularMeme photos={popularMemePhotos}/>
            <ChoiceTags 
                categories={categories}
                category={category}
                setCategory={setCategory}
                tags={tags} 
            />
            <RecentMemeTitle fetchData={updateState}/>
            <MemeBoard photos={recentMemePhotos}
                setSelectedMeme={props.setSelectedMeme}
                setOpenModal={props.setOpenModal}>
                <Collage />
            </MemeBoard>
        </Fragment>
    );
};

export default Main;