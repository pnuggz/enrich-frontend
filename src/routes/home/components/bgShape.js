import React from "react";

import BgSquare from "../../../components/bgSquare"

const BgShape = () => {
  return (
    <React.Fragment>
      <BgSquare
        animation={"move-left-right 4s infinite"}
        height={"300px"}
        width={"300px"}
        opacity={"0.5"}
        left={"3%"}
        top={"-21%"}
      />
      <BgSquare
        animation={"move-left-right 6s infinite"}
        height={"400px"}
        width={"400px"}
        opacity={"0.4"}
        right={"-5%"}
        top={"-12%"}
      />
      <BgSquare
        animation={"move-left-right 5s infinite"}
        height={"200px"}
        width={"200px"}
        opacity={"0.1"}
        left={"-5%"}
        bottom={"0%"}
      />
      <BgSquare
        animation={"move-left-right 10s infinite"}
        height={"100px"}
        width={"100px"}
        opacity={"0.9"}
        right={"27%"}
        top={"70%"}
      />
      <BgSquare
        animation={"move-left-right 6s infinite"}
        height={"250px"}
        width={"250px"}
        opacity={"0.1"}
        left={"32%"}
        bottom={"29%"}
      />
      <BgSquare
        animation={"move-left-right 9s infinite"}
        height={"80px"}
        width={"80px"}
        opacity={"0.8"}
        left={"10%"}
        top={"35%"}
      />
      <BgSquare
        animation={"move-left-right 3s infinite"}
        height={"300px"}
        width={"300px"}
        opacity={"0.1"}
        right={"-5%"}
        bottom={"0%"}
      />
    </React.Fragment>
  )
}

export default BgShape