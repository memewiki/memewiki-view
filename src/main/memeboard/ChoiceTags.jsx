import React, { useState, useEffect } from 'react';

const ChoiceTags = props => {

    const { categories, tags, category, setCategory } = props;

    const [ tagArray, setTagArray ] = useState([]);

    // 처음에 categories 의 값을 props 로 할당해줬어도
    // useEffect 에서 사용될 시점에는 undefined임.
    // 그래서 categories 가 값이 세팅돼서 들어갈 때, useEffect 한번더 호출해 줘야 되서
    // useEffect 두번째 인자 배열에 categories를 넣어야함.
    useEffect(() => {
        if (categories !== undefined && categories.length > 0) {
            setCategory(categories[0]);
            changeTags(categories[0]);
        }
    }, [categories]);

    const changeTags = category => {
        let array = []
        let subArray = [];

        let cnt = 0;

        for (let i = 0;i<tags.length;i++) {
            if (tags[i].category !== category) continue;
            subArray.push(<button className='tag-btn' key={i}>{tags[i].tag}</button>);
            if ([4,8,13,17].includes(cnt)) {
                subArray.push(<br key={i+"br"}/>);
                array.push(subArray);
                subArray = [];
            }
            cnt++;
        }
        if (subArray.length > 0) {
            array.push(subArray);
        }

        setTagArray(array);
    };

    return (
        <div className='board-tag-div'>
            <div className='board-category-div'>
                {
                    categories.map((text, key) => (
                        <p className={text === category ? 'board-category selected' : 'board-category'} 
                            key={key}
                            onClick={() => {
                                setCategory(text);
                                changeTags(text);
                                }}>
                            {text}
                        </p>
                    ))
                }
            </div>
            <div className='tag-btn-div'>
                <div className='tag-btn-row'>
                    {
                        tagArray.map((subArray) => subArray)    
                    }
                </div>
            </div>
        </div>
    );
};

export default ChoiceTags;