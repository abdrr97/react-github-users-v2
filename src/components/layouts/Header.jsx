import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GithubContext } from '../../context/context'

const Header = () => {
  const { requests } = useContext(GithubContext)
  return (
    <>
      <header className='github__profile-header'>
        <div className='github__profile-requests'>
          <span>{requests || 'loading ...'}/60</span>
          <span>requests left</span>
        </div>
        <div className='github__profile-requests'>
          <Link to='/'>
            <span>Search User</span>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
