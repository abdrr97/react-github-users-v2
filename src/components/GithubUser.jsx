import React, { useContext } from 'react'
import Header from './layouts/Header'
import MainSection from './layouts/MainSection'
import ChartSection from './layouts/ChartSection'
import ReposSection from './layouts/ReposSection'
import { GithubContext } from '../context/context'

const GithubUser = () => {
  const { loading } = useContext(GithubContext)

  document.body.className = ''
  return (
    <>
      <Header />
      {loading ? (
        <img src='../assets/preloader.gif' alt='loading' />
      ) : (
        <>
          <MainSection />
          <ChartSection />
          <ReposSection />
        </>
      )}
    </>
  )
}

export default GithubUser
