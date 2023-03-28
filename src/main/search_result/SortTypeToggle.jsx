import React, { useState, useEffect } from 'react';

const SortTypeToggle = props => {
//
  useEffect(() => {
    props.setToggleType(props.toggleType);
  }, [props.toggleType]);

  const changeToggleType = () => {
    switch(props.toggleType) {
      case 'recent' :
        props.setToggleType('popular');
        break;
      case 'popular' :
        props.setToggleType('recent');
        break;
      default : 
        break;
    }
  }

  return (
    <div id="sort-type-toggle-div">
      <span className={props.toggleType === 'recent' ? 'sort-type selected' : 'sort-type'}
        onClick={changeToggleType}>
        최신순
      </span>
      <span className={props.toggleType === 'popular' ? 'sort-type selected' : 'sort-type'}
        onClick={changeToggleType}>
        좋아요순
      </span>
    </div>
  );
};

export default SortTypeToggle;