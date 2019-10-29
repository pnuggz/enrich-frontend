import React from "react";

const BgShape = props => {
  const shapeStyle = {
    background: "orange",
    width: "100%",
    height: "50%",
    msTransform: "skewY(-20deg)",
    WebkitTransform: "skewY(-20deg)",
    transform: "skewY(-20deg)",
    borderRadius: "30px",
    position: "absolute",
    top: "25%",
    left: "50px",
    zIndex: "-100"
  }

  return (
    <React.Fragment>
      <div style={shapeStyle}></div>
    </React.Fragment>
  )
}

export default BgShape