import React from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

const List = ({boardList, setBoardList}) => {
  return (
    <div className='List'>
      <Header />
      <div className='container pd'>
        <table className="ListTable">
          <thead>
            <tr>
                <td className='no'>no</td>
                <td className='tit'>title</td>
                <td className='date'>date</td>
            </tr>
          </thead>
          <tbody>
            {
              boardList.map((it, idx) => {
                return (
                  <tr key={idx}>
                    <td className='no'>{idx + 1}</td>
                    <td className='tit'>
                        <Link to={'/detail/' + it.id}>
                            {it.title}
                        </Link>
                    </td>
                    <td className='date'>{it.date}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List