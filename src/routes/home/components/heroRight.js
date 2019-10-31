import React from "react"

import SelectInstitution from "./selectInstitution";
import { InstitutionForm } from "../../../modules/institutionForm"

const HeroRight = props => {
  const isLoading = props.isLoading
  const institutions = props.institutions
  const onSelectInstitution = props.onSelectInstitution
  const institutionForm = props.institutionForm
  const onSubmitForm = props.onSubmitForm
  const stateSchema = props.stateSchema
  const validationStateSchema = props.validationStateSchema
  const institution = props.institution

  return (
    <React.Fragment>
      <div className="card grid">
        <div className="column is-full">
          <h4>Quickly check to see if your bank is supported!</h4>
          <br/>
          <SelectInstitution institutions={institutions} onSelectInstitution={onSelectInstitution}></SelectInstitution>

          {(institution !== null) ? 
          <InstitutionForm
            isLoading={isLoading}
      
            institutions={institutions} 
            onSelectInstitution={onSelectInstitution}

            institutionForm={institutionForm}
            onSubmitForm={onSubmitForm}
            stateSchema={stateSchema}
            validationStateSchema={validationStateSchema}
            institution={institution}
          /> : null}
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroRight