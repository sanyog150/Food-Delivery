import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  return (
    <>
      <Header/>
      <ExploreMenu/>
      <FoodDisplay/>
      <AppDownload/>
    </>
  ) 
}

export default Home
