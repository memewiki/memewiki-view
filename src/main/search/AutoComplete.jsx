import React, {useEffect} from 'react';

const AutoComplete = props => {

    const { keyword, keywords } = props;

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