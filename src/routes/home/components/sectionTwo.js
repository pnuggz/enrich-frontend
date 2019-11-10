import React from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Input,
  UncontrolledTooltip
} from "reactstrap";

import imgApp from "../../../assets/img/landing/app.png";
import imgPath2 from "../../../assets/img/landing/path2.png";
import imgPath4 from "../../../assets/img/landing/path4.png";
import imgPath5 from "../../../assets/img/landing/path5.png";

const SectionTwo = () => {
  return (
    <React.Fragment>
      {/* <section className="section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Mike Scheinder</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Offices parties lasting outward nothing age few resolve.
                  Impression to discretion understood to we interested he
                  excellence. Him remarkably use projection collecting. Going
                  about eat forty world has round miles.
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/creativetim"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://dribbble.com/creativetim"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                TEST
              </Col>
            </Row>
          </Container>
        </section> */}
      <section className="section section-lg">
        <img
          alt="..."
          className="path"
          src={imgPath2}
          style={{
            position: "absolute",
            right: "500px",
            left: "auto",
            maxWidth: "10%",
            top: "-90px"
          }}
        />
        <img
          alt="..."
          className="path"
          src={imgPath4}
          style={{ left: "auto", right: "-250px", maxWidth: "70%", top: "0" }}
        />
        <img
          alt="..."
          className="path"
          src={imgPath5}
          style={{
            position: "absolute",
            right: "auto",
            left: "420px",
            maxWidth: "10%",
            top: "420px"
          }}
        />
        <section className="section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Absolute Security</h1>
                <p className="profile-description">
                  We take the security of your information and your data very
                  seriously. We only store the bare essential data, and utilise
                  bank-level security and data encryption. Nothing is stored on
                  your phone so you don’t have to worry if you lose it or it
                  gets stolen.
                </p>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <img alt="App" src={imgApp} />
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <section className="section section-lg">
        <Container>
          <Row className="justify-content-between">
            <Col md="6" className="mt-auto">
              <div className="mt-3">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../../../assets/img/landing/path1.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">DREAM</h4>
                        <span>Plan</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Unlimited bank accounts</ListGroupItem>
                        <ListGroupItem>
                          Hundres of charities and NFP orgs.
                        </ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col md="5">
              <h1 className="profile-title text-left">Pricing</h1>
              <p className="profile-description text-left">
                We are a non-profit organisation with a mission of connecting
                all of the great charities in the Australian community.
                Unfortunately the world doesn't run dreams, and there is a cost
                that cannot be escaped.
              </p>
              <br />
              <p className="profile-description text-success text-left">
                With your support, all we ask for is less than a gold coin a
                month associated with your account.
              </p>
              <br />
              <p className="profile-description text-left">
                This helps with keeping your data secure, and allowing us to
                continue partnering and supporting other Australian companies.
              </p>
              <div className="btn-wrapper pt-3">
                <Button
                  className="btn-simple"
                  color="primary"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="tim-icons icon-book-bookmark" /> Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-lg">
        <section className="section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">For Humanity</h1>
                <p className="profile-description">
                  This app was created for the people, and will grow with the
                  people. We are always striving to better ourselves, just as we
                  know you are.
                </p>
                <br />
                <p className="profile-description">
                  Get in contact with us to leave a feedback, or have a chat.
                </p>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-plain">
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input defaultValue="Mike" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="mike@email.com" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input defaultValue="001-12321345" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input defaultValue="CreativeTim" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Hello there!" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </React.Fragment>
  );
};

export default SectionTwo;
