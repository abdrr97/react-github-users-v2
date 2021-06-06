import React, { useState, useEffect, createContext } from 'react'
import { mockUser } from './mockData.js/mockUser'
import { mockRepos } from './mockData.js/mockRepos'
import { mockFollowers } from './mockData.js/mockFollowers'
// import axios from 'axios'

const url = 'https://api.github.com'

//  GithubUserContext,consumer,GithubUserContext.Provider
const GithubContext = createContext()

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  const [requests, setRequests] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({
    show: false,
    msg: '',
  })

  // check rate
  const checkRequests = () => {
    fetch(`${url}/rate_limit`)
      .then((res) => res.json())
      .then((response) => {
        setRequests(response.rate.remaining)
      })
      .catch((error) => console.error(error))
  }

  const searchGithubUser = (user) => {
    setLoading(true)
    fetch(`${url}/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        const { followers_url, repos_url } = data

        // make request to repositories of the user
        fetch(`${repos_url}?per_page=100`)
          .then((res) => res.json())
          .then((repos) => setRepos(repos))

        // make request to followers of the user
        fetch(`${followers_url}?per_page=100`)
          .then((res) => res.json())
          .then((followers) => {
            setFollowers(followers)
            setLoading(false)
          })

        setGithubUser(data)
      })
      .catch((e) => console.log(e))

    checkRequests()
  }
  useEffect(checkRequests, [])

  const contextValues = {
    githubUser,
    repos,
    followers,
    requests,
    error,
    searchGithubUser,
    loading,
  }

  return (
    <GithubContext.Provider value={contextValues}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }
