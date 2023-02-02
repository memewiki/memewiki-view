import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Search from './main/search/Search';
import SearchResultMain from './main/search_result/SearchResultMain';
import MemeDetail from './main/memeboard/MemeDetail';
import './css/memeboard.css';
import './css/search.css';
import './css/collage.css';
import './css/searchResult.css';
import './css/meme_modal.css';
import MemeInput from './main/memeboard/MemeInput';
import "@fontsource/inter";

function App() {

  const [selectedMeme, setSelectedMeme] = useState({});
  const [openModal, setOpenModal] = useState(undefined);

  return (
    <div className="App">
      <BrowserRouter>
        <Search setOpenModal={setOpenModal} />
        <Routes>
          <Route path="/" element={<Main 
            selectedMeme={selectedMeme} 
            setSelectedMeme={setSelectedMeme}
            setOpenModal={setOpenModal} />} />
          <Route path="/search/:searchKeyword" element={<SearchResultMain 
            selectedMeme={selectedMeme} 
            setSelectedMeme={setSelectedMeme}
            setOpenModal={setOpenModal} />} />
        </Routes>
      </BrowserRouter>
      {   
        openModal === 'detail' &&
        <MemeDetail meme={selectedMeme} 
            setOpenModal={setOpenModal} />
      }
      {
        openModal === 'input' &&
        <MemeInput setOpenModal={setOpenModal} />
      }
    </div>
  );
}

export default App;
