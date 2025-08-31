import React from 'react'
import WelcomeEservice from '../../components/WelcometoSerbia/Banner/WelcomeEservice'
import Navbar from '../../components/Navbar/Navbar'
import BannerSecSection from '../../components/WelcometoSerbia/BannerSecSection/BannerSecSection'
import BannerThirdSection from '../../components/WelcometoSerbia/BannerThirdSection/BannerThirdSection'


function Home() {
  return (
    <>
    <Navbar/>
    <WelcomeEservice/>
    <BannerSecSection/>
    <BannerThirdSection/>
    </>


  )
}

export default Home