import './App.css';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import List from './pages/List';
import Write from './pages/Write';
import Detail from './pages/Detail';
import Modify from './pages/Modify';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [input, setInput] = useState({});
  const [boardList, setBoardList] = useState(() => {
    const list = localStorage.getItem('list');
    if (list) {
      return JSON.parse(list)
    } else {
      return []
    }
  });

  useEffect(() => { 
    localStorage.setItem('list', JSON.stringify(boardList))
  }, [boardList])

  const id = useRef(1);
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> }  />
        <Route path='/list' element={<List boardList={boardList} setBoardList={setBoardList} />} />
        <Route path='/write' element={<Write input={input} setInput={setInput} boardList={boardList} setBoardList={setBoardList}id={id} />} />
        <Route path='/detail/:id' element={<Detail boardList={boardList} setBoardList={setBoardList} />} />
        <Route path='/modify/:id' element={<Modify boardList={boardList} setBoardList={setBoardList} />} />
      </Routes>
    </div>
  );
}

export default App;
