import React from "react"

const HeroLeft = props => {
  return (
    <React.Fragment>
      <h3>Spare a change for change</h3>
      <p>
        Making a difference to you favourite cause has never been this easy.
        It all starts with a little nudge that will snowball to a better world.
      </p>
      <div className="is-button-group">
        <button className="button is-rounded is-bg-neutral is-bordercolor-none">Learn more</button>
        <button className="is-rounded is-bg-primary is-bordercolor-none is-color-white button">Sign up</button>
      </div>
    </React.Fragment>
  )
}

export default HeroLeft