import React from "react"

const SectionOne = () => {
  return (
    <React.Fragment>
      <div className="grid">
        <div className="column is-full" style={{ position: "relative", top: "-7em" }}>
          <div className="grid">
            <div className="column is-full">
              <img className="is-margin-center" src={"img/home/one-devices.png"} />
            </div>
            <div className="column is-full" style={{ marginTop: "4em" }}>
              <div className="grid">
                <div className="column is-third has-text-center">
                  <h5>Round Up</h5>
                  <p>Automatically track and donate the change from your daily purchases.</p>
                </div>
                <div className="column is-third has-text-center">
                  <h5>On Your Terms</h5>
                  <p>Set monthly limits, and pause or continue donations all at your fingertips.</p>
                </div>
                <div className="column is-third has-text-center">
                  <h5>No Hassle</h5>
                  <p>We won't ever hassle you to give more than you want.</p>
                </div>
              </div>
            </div>
            <div className="column is-full" style={{ marginTop: "4em" }}>
              <div className="grid">
                <div className="column is-third has-text-center">
                </div>
                <div className="column is-third has-text-center">
                  <h3>Let's Change the World</h3>
                </div>
                <div className="column is-third has-text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SectionOne