import React from "react";
import posed from "react-pose";

import { PageLayout } from "../../../../modules/pageLayout";
import SelectInstitution from "./components.js/selectInstitution";
import { AccountForm } from "../../../../modules/accountForm"

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
  const accountState = props.accountState
  const accountForm = accountState.accountForm
  const isLoading = props.isLoading

  const institutions = accountState.accountInstitutions

  const selectedInstitution = props.selectedInstitution
  const onSelectInstitution = props.onSelectInstitution
  const onSubmitForm = props.onSubmitForm

  return (
    <PageLayout>
      <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
        <SelectInstitution institutions={institutions} onSelectInstitution={onSelectInstitution}></SelectInstitution>

        {(selectedInstitution !== null) ? <AccountForm
          accountForm={accountForm}
          onSubmitForm={onSubmitForm}
          stateSchema={accountForm.stateSchema}
          validationStateSchema={accountForm.validationStateSchema}
          institution={selectedInstitution}
        ></AccountForm> : null}
      </ParentDiv>
    </PageLayout>
  );
};
