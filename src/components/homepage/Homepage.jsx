import React from 'react'
import CarouselBootstrap from './CarouselBootstrap.jsx'
import JumbotBootstrap from './JumbotBootstrap.jsx'
import LogoSection from './LogoSection.jsx'

const Homepage = (props) => {
  return (
    <main>
      <CarouselBootstrap />
      <JumbotBootstrap/>
      <LogoSection/>
    </main>
  )
}

export default Homepage
