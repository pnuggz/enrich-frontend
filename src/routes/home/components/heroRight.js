import React from "react";

import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import SelectInstitution from "./selectInstitution";
import { InstitutionForm } from "../../../modules/institutionForm";
import FullySecured from "./fullySecured";

const HeroRight = props => {
  const isLoading = props.isLoading;
  const institutions = props.institutions;
  const onSelectInstitution = props.onSelectInstitution;
  const institutionForm = props.institutionForm;
  const onSubmitForm = props.onSubmitForm;
  const stateSchema = props.stateSchema;
  const validationStateSchema = props.validationStateSchema;
  const institution = props.institution;

  return (
    <React.Fragment>
      <Container>
        <Row className="row-grid justify-content-between">
          <Col>
            <Card className="mb-0">
              <CardBody>
                <Row>
                  <Col>
                    <CardTitle tag="div">
                      <h4 className="text-primary">
                        Quickly check to see if your bank institution is
                        supported!
                      </h4>
                    </CardTitle>
                    <Row>
                      <Col>
                        <SelectInstitution
                          institutions={institutions}
                          onSelectInstitution={onSelectInstitution}
                        ></SelectInstitution>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {institution !== null ? (
                          <InstitutionForm
                            isLoading={isLoading}
                            institutions={institutions}
                            onSelectInstitution={onSelectInstitution}
                            institutionForm={institutionForm}
                            onSubmitForm={onSubmitForm}
                            stateSchema={stateSchema}
                            validationStateSchema={validationStateSchema}
                            institution={institution}
                          />
                        ) : (
                          <FullySecured />
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HeroRight;
