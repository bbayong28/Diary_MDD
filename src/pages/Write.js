import React from 'react'
import { useNavigate } from 'react-router-dom'
import Wheader from '../component/Wheader';

const Write = ({ input, setInput, boardList, setBoardList, id }) => {
  
  const GO = useNavigate();

  const inputHandler = (e) => { 
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      date: new Date().toLocaleDateString(),
      id : id.current
    })
  }

  const submitHandler = () => { 
    
    if (!input.title) { 
      alert('제목을 입력해주세요.')
      return
    }
    if (!input.content) {
      alert('내용을 입력해주세요.')
      return
    }

    setBoardList([
      ...boardList,
      input
    ])

    id.current++;
    setInput({
      //name: "",
      title: "",
      content:"",
    })


    GO('/list')
  }
  
  return (
    <div className='WriteList'>
      <Wheader />
      <div className="container pd">
        <table className='WriteTable'>
          <tbody>
            <tr>
                <td className='title'>제목 : </td>
                <td className='second'>
                  <input
                    name='title'
                    onChange={inputHandler}
                    value={input.title || ''}
                  />
                </td>
              </tr>
              <tr>
                <td className='title'>내용 : </td>
                <td className='second'>
                  <textarea
                    name='content'
                    onChange={inputHandler}
                    value={input.content || ''}
                  />
                </td>
              </tr>
          </tbody>
        </table> 
        <div className="writeSubmit">
          <button onClick={submitHandler}>일기 저장</button>
        </div>
      </div>
    </div>
  )
}

export default Write