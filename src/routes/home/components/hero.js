import React from "react"

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
    <div className="hero__content has-no-padding" style={{position: "relative", overflow: "hidden"}}>
      <BgShape />
      <div className="container" style={{zIndex: "1"}}>
        <div className="grid" style={{ height: "100vh", alignItems: "center"}}>
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