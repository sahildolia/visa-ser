import React from 'react'
import PRNavbar from '../../components/PrevSentReqs/PRNavbar/PRNavbar'
import WelcomeUserPr from '../../components/PrevSentReqs/WelcomeUserPr/WelcomeUserPr'
import BannerSecSection from '../../components/WelcometoSerbia/BannerSecSection/BannerSecSection'
import BannerThirdSection from '../../components/WelcometoSerbia/BannerThirdSection/BannerThirdSection'
import Footer from '../../components/Footer/Footer'
import SecBannerSec from '../../components/PrevSentReqs/SecBannerSec/SecBannerSec'

function WelcomeUser() {
  return (
    <>
      <PRNavbar/>
      <WelcomeUserPr/>
      {/* <BannerSecSection/> */}
      <SecBannerSec/>
      <BannerThirdSection/>
      <Footer/>
    </>
  )
}

export default WelcomeUser