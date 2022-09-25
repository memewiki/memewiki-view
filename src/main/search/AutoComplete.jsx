import React from 'react';

const AutoComplete = props => {

    const { keywords } = props;

    return (
        <div className='auto-complete-div'>
            {
                keywords.map((keyword, key) => (
                    <p className='auto-complete-keyword' key={key}>{keyword}</p>
                ))
            }
        </div>
    );
};

export default AutoComplete;