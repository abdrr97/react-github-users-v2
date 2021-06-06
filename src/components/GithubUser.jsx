import React, { useContext } from 'react'
import Header from './layouts/Header'
import MainSection from './layouts/MainSection'
import ChartSection from './layouts/ChartSection'
import ReposSection from './layouts/ReposSection'

const GithubUser = () => {
  document.body.className = ''

  return (
    <>
      <Header />
      <MainSection />
      <ChartSection />
      <ReposSection />
    </>
  )
}

export default GithubUser
