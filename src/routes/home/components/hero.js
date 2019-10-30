import React from "react"

import BgShape from "./bgShape"
import HeroLeft from "./heroLeft"
import HeroRight from "./heroRight"

const Hero = props => {
  return (
    <div className="hero__content has-no-padding" style={{position: "relative", overflow: "hidden"}}>
      <BgShape />
      <div className="container" style={{zIndex: "1"}}>
        <div className="grid">
          <div className="column is-6">
            <HeroLeft/>
          </div>
          <div className="column is-1"></div>
          <div className="column is-5">
            <HeroRight/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero