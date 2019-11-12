import React from "react";

import imgBg from "../../../assets/img/landing/bg-signup.jpg";

const SectionThree = () => {
  return (
    <section className="section section-lg">
      <div
        className="clearfix"
        style={{
          height: "400px",
          width: "100%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <img 
          src={imgBg}
          style={{
            position: "absolute",
            width: "100%",
            height: "auto",
            zIndex: "-1",
          }}
        />
      </div>
    </section>
  )
}

export default SectionThree