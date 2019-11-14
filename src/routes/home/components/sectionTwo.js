import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
  UncontrolledTooltip,
  Button
} from "reactstrap";

// import Button from "../../../components/button"
import ListGroup from "../../../components/listGroup"
import ListGroupItem from "../../../components/listGroupItem"

import imgApp from "../../../assets/img/landing/app.png";
import imgPath2 from "../../../assets/img/landing/path2.png";
import imgPath4 from "../../../assets/img/landing/path4.png";
import imgPath5 from "../../../assets/img/landing/path5.png";

const SectionTwo = () => {
  return (
    <React.Fragment>
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
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h1 className="profile-title text-left">Absolute Security</h1>
                <p className="profile-description">
                  We take the security of your information and your data very
                  seriously. We only store the bare essential data, and utilise
                  bank-level security and data encryption. Nothing is stored on
                  your phone so you don’t have to worry if you lose it or it
                  gets stolen.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                <img alt="App" src={imgApp} />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 mt-auto">
              <div className="mt-3">
                <div className="card card-coin card-plain">
                  <div className="card-header">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../../../assets/img/landing/path1.png")}
                    />
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h4 className="text-uppercase">DREAM</h4>
                        <span>Plan</span>
                        <hr className="line-primary" />
                      </div>
                    </div>
                    <div className="row">
                      <ListGroup>
                        <ListGroupItem>Unlimited bank accounts</ListGroupItem>
                        <ListGroupItem>
                          Hundres of charities and NFP orgs.
                        </ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
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
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  <i className="tim-icons icon-book-bookmark" /> Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6" lg="4" md="6">
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
              </div>
              <div className="col-lg-6 col-md-6 ml-auto mr-auto" lg="6" md="6">
                <div className="card card-plain">
                  <div className="card-body">
                    <Form>
                      <div className="row">
                        <div className="col-md-6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input defaultValue="Mike" type="text" />
                          </FormGroup>
                        </div>
                        <div md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="mike@email.com" type="email" />
                          </FormGroup>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input defaultValue="001-12321345" type="text" />
                          </FormGroup>
                        </div>
                        <div md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input defaultValue="CreativeTim" type="text" />
                          </FormGroup>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12" md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Hello there!" type="text" />
                          </FormGroup>
                        </div>
                      </div>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip3"
                        type="button"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip3"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default SectionTwo;
