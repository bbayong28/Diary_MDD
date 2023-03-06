import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Wheader from '../component/Wheader';

const Modify = ({ boardList, setBoardList }) => {

  const GO = useNavigate()
  const { id } = useParams();
  const v = boardList.find(it => String(it.id) === id);
  const modifyHandler = () => {
    const modify = boardList.map(it => String(it.id) === id ? {
      ...input,
      name: input.name,
      content: input.content,
      title: input.title
    } : it)
  
    setBoardList(modify)
    GO('/detail/' + v.id)
  }

  const [input, setInput] = useState({
    id: v.id,
    name: v.name,
    title: v.title,
    content: v.content,
    date: new Date().toLocaleDateString(),
  })

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }


  return (
    <div className='Modify'>
      <Wheader />
      <div className="container pd">
        <table className='ModifyTable'>
          <tbody>
            <tr>
                <td className='title'>제목 : </td>
                <td className='second'>
                  <input
                    name='title'
                    onChange={inputHandler}
                    value={input.title}
                  />
                </td>
              </tr>
              <tr>
                <td className='title'>내용 : </td>
                <td className='second'>
                  <textarea
                    rows='10'
                    name='content'
                    onChange={inputHandler}
                    value={input.content}
                  />
                </td>
              </tr>
          </tbody>
        </table> 
        <div className="modifySubmit">
        <button onClick={modifyHandler}>수정하기</button>
        </div>
      </div>
      

    </div>
  )
}

export default Modify