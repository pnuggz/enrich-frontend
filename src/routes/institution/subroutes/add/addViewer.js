import React from "react";
import posed from "react-pose";

import { PageLayout } from "../../../../modules/pageLayout";
import SelectInstitution from "./components/selectInstitution";
import { InstitutionForm } from "../../../../modules/institutionForm"

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

export const AddViewer = props => {
  const institutionState = props.institutionState
  const institutionForm = institutionState.institutionForm
  const institutions = institutionState.institutionsData.institutions
  const isLoading = props.isLoading

  const selectedInstitution = props.selectedInstitution
  const onSelectInstitution = props.onSelectInstitution
  const onSubmitForm = props.onSubmitForm

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <SelectInstitution institutions={institutions} onSelectInstitution={onSelectInstitution}></SelectInstitution>

        {(selectedInstitution !== null) ? <InstitutionForm
          institutionForm={institutionForm}
          onSubmitForm={onSubmitForm}
          stateSchema={institutionForm.stateSchema}
          validationStateSchema={institutionForm.validationStateSchema}
          institution={selectedInstitution}
        ></InstitutionForm> : null}
      </ParentDiv>
    </PageLayout>
  );
};
