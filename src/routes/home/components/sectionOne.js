import React from "react";

import { Container, Row, Col } from "reactstrap";

import imgPath4 from "../../../assets/img/landing/path4.png";

const SectionOne = () => {
  return (
    <React.Fragment>
      <section className="section">
        <section className="section">
          <img
            alt="..."
            class="path"
            src={imgPath4}
            style={{ left: "-110px", maxWidth: "60%", top: "50px" }}
          />
          <Container>
            <Row className="justify-content-center">
              <Col md="12" lg="12">
                <h2 className="text-center">Your best benefit</h2>
                <Row className="row-grid justify-content-center">
                  <Col md="4" lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Round-Ups</h4>
                      <hr className="line-primary" />
                      <p>
                        Invest the change from your daily purchases  and see how
                        quickly it adds up.
                      </p>
                    </div>
                  </Col>
                  <Col md="4" lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Recurring</h4>
                      <hr className="line-warning" />
                      <p>
                        Set recurring daily, weekly or monthly  investment
                        amounts to set aside more.
                      </p>
                    </div>
                  </Col>
                  <Col md="4" lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Lump Sums</h4>
                      <hr className="line-success" />
                      <p>
                        Invest a lump sum into your account and  let our
                        technology help you grow it.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </React.Fragment>
  );
};

export default SectionOne;
