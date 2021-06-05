import React from 'react'

const MainSection = () => {
  return (
    <section className='wrapper'>
      <article className='wrapper__profile-info'>
        <img
          src='https://avatars.githubusercontent.com/u/42917967?v=4'
          alt=''
        />

        <h3 className='name'>Abderrahmane</h3>

        <a className='username' href='/'>
          @abdrr97
        </a>

        <div className='wrapper__general-info'>
          <ul>
            <li>@EpicGames</li>
            <li>Casablanca</li>
            <li>Joined September 2, 2018</li>
          </ul>
          <div className='repos__info-boxes'>
            <div className='repos__info-box'>
              <span>26</span>
              <span>REPOSITORIES</span>
            </div>
            <div className='repos__info-box'>
              <span>0</span>
              <span>FOLLOWERS</span>
            </div>
            <div className='repos__info-box'>
              <span>3</span>
              <span>FOLLOWING</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default MainSection
