/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../../context/context'
import { useParams } from 'react-router-dom'
import loadingGif from '../../assets/preloader.gif'

const MainSection = () => {
  const {
    githubUser: {
      avatar_url,
      name,
      company,
      location,
      login,
      created_at,
      followers: followersCount,
      following: followingCount,
      public_repos,
      html_url,
    },
    loading,
    searchGithubUser,
  } = useContext(GithubContext)
  const { username } = useParams()

  useEffect(() => {
    searchGithubUser(username)
  }, [])

  return (
    <section className='wrapper'>
      {loading ? (
        <div className='center'>
          <img src={loadingGif} alt='loading' />
        </div>
      ) : (
        <article className='wrapper__profile-info'>
          <img src={avatar_url} alt={name} />

          <h3 className='name'>{name}</h3>

          <a
            className='username'
            href={html_url}
            target='_blank'
            rel='noreferrer'
          >
            @{login}
          </a>

          <div className='wrapper__general-info'>
            <ul>
              <li>{company}</li>
              <li>{location}</li>
              <li>Joined {new Date(created_at).toDateString()}</li>
            </ul>
            <div className='repos__info-boxes'>
              <div className='repos__info-box'>
                <span>{public_repos}</span>
                <span>REPOSITORIES</span>
              </div>
              <div className='repos__info-box'>
                <span>{followersCount}</span>
                <span>FOLLOWERS</span>
              </div>
              <div className='repos__info-box'>
                <span>{followingCount}</span>
                <span>FOLLOWING</span>
              </div>
            </div>
          </div>
        </article>
      )}
    </section>
  )
}

export default MainSection
