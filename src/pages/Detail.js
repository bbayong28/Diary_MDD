import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Wheader from '../component/Wheader'

const Detail = ({ boardList, setBoardList }) => {
  
  const GO = useNavigate();
  const { id } = useParams();
  const v = boardList.find(it => String(it.id) === id);
  const deleteHandler = () => { 
    const newList = boardList.filter(it => it.id != v.id) 
    setBoardList(newList)
    GO('/list')
  }

  const modifyHandler = () => { 
    GO('/modify/' + v.id)
  }

  return (
    <div className='Detail'>
      <Wheader/>
      <div className="container dc">     
        <div className='title'>
          <h3>{v.title}</h3>
        </div>
        <div
          style={{ whiteSpace: "pre-line" }}
          className='content'
        >{v.content}</div>
        <div className='date'>작성날짜 : {v.date}</div>
        <div className='icon'>
          <button onClick={modifyHandler}>
            수정<i className='xi-eraser-o'></i>
          </button>
          <button onClick={deleteHandler}>
            삭제<i className='xi-trash-o'></i>
          </button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Detail