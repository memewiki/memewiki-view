import React, { useState } from 'react';
import { useEffect } from 'react';

const SortTypeToggle = props => {

  const [toggleType, setToggleType] = useState('recent');

  useEffect(() => {
    props.setToggleType(toggleType);
  }, [toggleType]);

  return (
    <div id="sort-type-toggle-div">
      <p className={toggleType === 'recent' ? 'board-category selected' : 'board-category'}>
        최신순
      </p>
      <p className={toggleType === 'popular' ? 'board-category selected' : 'board-category'}>
        좋아요순
      </p>
    </div>
  );
};

export default SortTypeToggle;