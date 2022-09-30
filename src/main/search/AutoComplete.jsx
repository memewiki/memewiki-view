import React, {useEffect} from 'react';

const AutoComplete = props => {

    const { keyword, keywords } = props;

    useEffect(() => {
        if (keywords !== undefined && keywords.length > 0) {
        const text = keywords[0];
        let text2 = text.substring(0,keyword);
        console.log(text2);
        }
    },[keywords])

    return (
        <div className='auto-complete-div'>
            {
                keywords.map((word, key) => (
                    <p className='auto-complete-keyword' key={key}>
                        {word !== undefined ? word.substring(0,word.indexOf(keyword)) : null}
                        <b>{keyword}</b>
                        {word !== undefined ? word.substring(keyword.length) : null}
                    </p>
                ))
            }
        </div>
    );
};

export default AutoComplete;