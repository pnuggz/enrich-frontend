import React from "react"
import posed from "react-pose";

import Hero from "./components/hero"
import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

export const HomeViewer = props => {
  const institutionState = props.institutionState
  const institutionForm = institutionState.institutionForm
  const institutions = institutionState.institutionsData.institutions
  const isLoading = props.isLoading

  const selectedInstitution = props.selectedInstitution
  const onSelectInstitution = props.onSelectInstitution
  const onSubmitForm = props.onSubmitForm

  return (
    <React.Fragment>
      <div id="landing">
        <div className="wrapper">
          <Hero 
            isLoading={isLoading}
            
            institutions={institutions} 
            onSelectInstitution={onSelectInstitution}

            institutionForm={institutionForm}
            onSubmitForm={onSubmitForm}
            stateSchema={institutionForm.stateSchema}
            validationStateSchema={institutionForm.validationStateSchema}
            institution={selectedInstitution}
          />
          <section className="section section-lg">
            <section className="section">
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    TEST
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
} 