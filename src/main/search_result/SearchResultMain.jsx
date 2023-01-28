import React, { Fragment } from 'react';
import Search from '../search/Search';

const SearchResultMain = props => {

  const searchKeyword = props.searchKeyword;

  return (
    <Fragment>
      <Search keyword={props.searchKeyword} />
    </Fragment>
  );
};

export default SearchResultMain;