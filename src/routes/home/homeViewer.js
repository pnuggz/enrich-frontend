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
      <section className="hero is-full has-bg-black has-text-white">
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
        <SectionOne />
      </section>
      <section className="is-full" style={{ backgroundColor: "#F7F9F9" }}>
        <SectionTwo />
      </section>
    </React.Fragment>
  )
} 