import React from "react";

import { Row, Col } from "reactstrap";

import imgPadlock from "../../../assets/img/home/hero-right-padlock.png";

const FullySecured = () => {
  return (
    <React.Fragment>
      <Row className="mt-1">
        <Col style={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.8rem" }}>
            We use the highest level of security and will never store your bank
            login details.
          </span>
        </Col>
      </Row>
      <Row className="justify-content-center mt-2">
        <Col>
          <img
            className="img-fluid"
            src={imgPadlock}
            width={"30%"}
            alt="Secure padlock"
            style={{ display: "block", margin: "auto" }}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FullySecured;
