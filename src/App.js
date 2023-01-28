import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import SearchResultMain from './main/search_result/SearchResultMain';

function App() {

  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" render={() => <Main />} />
          <Route path="/search" element={<SearchResultMain 
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}/>} />
        </Routes>
      </BrowserRouter> */}
      <Main />
    </div>
  );
}

export default App;
