import React from "react";

const BgShape = props => {
  const shapeStyle = {
    background: "orange",
    width: "100%",
    height: "40%",
    msTransform: "skewY(-20deg)",
    WebkitTransform: "skewY(-20deg)",
    transform: "skewY(-20deg) translateX(50%)",
    borderRadius: "40px",
    position: "absolute",
    top: "40%",
    left: "50px"
  }

  return (
    <React.Fragment>
      <div style={shapeStyle}></div>
    </React.Fragment>
  )
}

export default BgShape