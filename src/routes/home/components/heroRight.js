import React from "react"

import SelectInstitution from "./selectInstitution";
import { InstitutionForm } from "../../../modules/institutionForm"
import FullySecured from "./fullySecured";

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
      <div className="card is-rounded">
        <div className="grid card__content">
          <div className="column is-full">
            <div className="column has-padding-left has-padding-right">
              <h4>Quickly check to see if your bank institution is supported!</h4>
              <br />
              <SelectInstitution institutions={institutions} onSelectInstitution={onSelectInstitution}></SelectInstitution>
            </div>

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
              /> :
              <FullySecured />
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroRight