import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Search from './main/search/Search';
import SearchResultMain from './main/search_result/SearchResultMain';
import './css/memeboard.css';
import './css/search.css';
import './css/collage.css';
import './css/searchResult.css';
import './css/meme_detail.css';

function App() {

  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search/:searchKeyword" element={<SearchResultMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
