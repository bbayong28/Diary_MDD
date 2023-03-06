import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
      <div className="container flex">
        <Link to='/' className='logo'>
          <img src={ process.env.PUBLIC_URL + "/assets/img/logo.png" } alt="" />
        </Link>
        <h2>나의 하루들</h2>
        <Link to='/write'>
          <i className='xi-plus'></i>
        </Link>
      </div>
    </div>
  )
}

export default Header