import React from "react"
import posed from "react-pose";

import Hero from "./components/hero"
import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";

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
        <section className="hero is-full">
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
        </section>
        <section className="is-full">
          <div className="grid">
            <div className="column is-full">
              TEST
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
} 