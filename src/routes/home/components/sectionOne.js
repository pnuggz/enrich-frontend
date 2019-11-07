import React from "react"

import {
  Container,
  Row,
  Col
} from "reactstrap"

const SectionOne = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default SectionOne