import React from "react"
import posed from "react-pose";

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
        <div className="hero__content">
          <div className="container grid has-text-center">
            <div className="column">
              <h3>Really big full page cover!</h3>
              <p>This is a full page cover. Make this example your own by adding a beautiful background photo.</p>
              <button className="button is-white has-margin-center is-large">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
} 