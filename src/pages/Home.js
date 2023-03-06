import React from 'react'
import List from './List'
import Write from './Write';
import { Routes, Route, NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div className='Home'>
      <div className='container'>
        <h1>My Daily Diary</h1>
        <p>오늘은 어떤 하루를 보내셨나요?</p>
        <div className='hmenu flex'>
          <NavLink to='/list'>
            <button><i className='xi-calendar-list'/>목록보기</button>
          </NavLink>
          <NavLink to='/write'>
            <button><i className='xi-calendar-add'/>새 글작성</button>
          </NavLink>
        </div>



        <Routes>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/write' element={<Write/>}></Route>
        </Routes>
        
      </div>
    </div>
  )
}

export default Home