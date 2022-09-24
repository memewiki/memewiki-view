import React, { useState } from 'react';

const ChoiceTags = props => {

    const categories = props.categories;

    const [category, setCategory] = useState(props.category);


    return (
        <div className='board-tag-div'>
            <div className='board-category-div'>
                {
                    categories.map((text, key) => (
                        <p className={text === category ? 'board-category selected' : 'board-category'} 
                            key={key}
                            onClick={() => setCategory(text)}>
                            {text}
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

export default ChoiceTags;