import React from 'react'
import { Link } from 'react-router-dom'

const Wheader = () => {
  return (
    <div className='Wheader'>
      <div className="container flex">
        <Link to='/' className='logo'>
          <img src={ process.env.PUBLIC_URL + "/assets/img/logo.png" } alt="" />
        </Link>
        <h2>오늘의 일기</h2>
        <Link to='/list'>
          <i className='xi-calendar-list' />
        </Link>
      </div>
    </div>
  )
}

export default Wheader