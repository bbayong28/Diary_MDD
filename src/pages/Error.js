import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='Error'>
      <div className="container pa">
        <p>없는 페이지 입니다.</p>
        <span>주소를 확인 해보세요.</span>
        <Link to='/'>홈으로 돌아가기</Link>
      </div>
      
    </div>
  )
}

export default Error
