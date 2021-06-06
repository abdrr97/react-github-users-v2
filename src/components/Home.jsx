import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { useHistory } from 'react-router-dom'
const Home = () => {
  document.body.className = 'main'
  const [username, setUsername] = useState('')
  const history = useHistory()
  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    history.push(`/user/${username}`)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt='github' />
        <h3 className='header-3'>Find your Github Profile</h3>
        <input
          autoFocus
          className='username'
          type='text'
          value={username}
          placeholder='username'
          onChange={handleChange}
        />
      </form>
    </main>
  )
}

export default Home
