import React from 'react'
import Header from '../components/layouts/Header'
import MainSection from '../components/layouts/MainSection'
import ChartSection from '../components/layouts/ChartSection'
import ReposSection from '../components/layouts/ReposSection'

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
