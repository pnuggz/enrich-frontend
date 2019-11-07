import React from "react"
import {
  Row,
  Col
} from "reactstrap"

import BgShape from "./bgShape"

import HeroLeft from "./heroLeft"
import HeroRight from "./heroRight"

const Hero = props => {
  const isLoading = props.isLoading
  const institutions = props.institutions
  const onSelectInstitution = props.onSelectInstitution
  const institutionForm = props.institutionForm
  const onSubmitForm = props.onSubmitForm
  const stateSchema = props.stateSchema
  const validationStateSchema = props.validationStateSchema
  const institution = props.institution

  return (
    <div className="page-header">
      <BgShape />
      <div className="content-center">
        <Row className="row-grid justify-content-between align-items-center text-left">
          <Col lg="6" md="6">
            <HeroLeft />
          </Col>
          <Col lg="4" md="5">
            <HeroRight
              isLoading={isLoading}

              institutions={institutions}
              onSelectInstitution={onSelectInstitution}

              institutionForm={institutionForm}
              onSubmitForm={onSubmitForm}
              stateSchema={stateSchema}
              validationStateSchema={validationStateSchema}
              institution={institution}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Hero