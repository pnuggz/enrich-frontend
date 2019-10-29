import React from "react"
import posed from "react-pose";

import Hero from "./components/hero"

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

export const HomeViewer = props => {
  
  return (
    <React.Fragment>
      <section className="hero is-full has-bg-black has-text-white">
        <Hero />
      </section>
      <section className="is-full">
        <div className="grid">
          <div className="column is-full">
            TEST
          </div>
        </div>
      </section>
    </React.Fragment>
  )
} 