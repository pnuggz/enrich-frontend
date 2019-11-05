import React from "react"

const BgSquare = props => {
  return (
    <div style={{
      position: "absolute",
      animation: props.animation,
      WebkitAnimation: props.animation,
      height: props.height,
      width: props.width,
      opacity: props.opacity,
      left: props.left || "auto",
      right: props.right || "auto",
      top: props.top || "auto",
      bottom: props.bottom || "auto",
      background: "linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%)",
      transition: "0.5s ease-out",
      overflow: "hidden",
      borderRadius: "20%"
    }}></div>
  )
}

export default BgSquare