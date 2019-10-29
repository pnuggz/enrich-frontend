import React from "react"

import BgShape from "./bgShape"

const Hero = props => {
  return (
    <div className="hero__content has-no-padding" style={{position: "relative", overflow: "hidden"}}>
      <BgShape />
      <div className="container has-text-center">
        <div className="column">
          <h3>Really big full page cover!</h3>
          <p>This is a full page cover. Make this example your own by adding a beautiful background photo.</p>
          <button className="button is-white has-margin-center is-large">Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Hero