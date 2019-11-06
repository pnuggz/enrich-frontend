import React from "react"

import BgSquare from "../../../components/bgSquare"

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
    <div className="hero__content has-no-padding">
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
      <div className="container has-zindex-100 is-color-white">
        <div className="grid">
          <div className="column is-6">
            <HeroLeft/>
          </div>
          <div className="column is-1"></div>
          <div className="column is-5">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero