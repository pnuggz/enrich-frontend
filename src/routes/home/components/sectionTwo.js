import React from "react"

const SectionTwo = () => {
  return (
    <React.Fragment>
      <div className="grid" style={{ alignItems: "center", position: "relative", }}>
        <div className="column" style={{ height: "35em", width: "65%" }}>
          <img src={"img/home/one-globe.png"}></img>
        </div>
        <div className="column" style={{ left: "58%", zIndex: "1" }}>
          TEST
        </div>
      </div>
    </React.Fragment>
  )
}

export default SectionTwo