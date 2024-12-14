import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <NavLink>
            <Link className='m-2' to={'/'}>Home</Link>
            <Link className='m-2' to={'/TodoApp'}>TodoApp</Link>
            <Link className='m-2' to={'/Todo'}>Todo</Link>
            <Link className='m-2' to={'/TypeOne'}>TypeOne</Link>
        </NavLink>
    </div>
  )
}

export default Header