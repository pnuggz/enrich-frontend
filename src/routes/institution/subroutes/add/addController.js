import React, { useState, useEffect } from "react";

import { AddViewer } from "./addViewer";

export const AddController = props => {
  const institutionState = props.institutionState;
  const institutions = institutionState.institutionsData.institutions
  const dispatchInstitutionStateAction = props.dispatchInstitutionStateAction
  const [isLoading, setIsloading] = useState(true);

  const [selectedInstitution, setSelectedInstitution] = useState(null)

  useEffect(() => {
    setIsloading(false);
  }, []);

  const onSelectInstitution = event => {
    const val = event.target.value
    if (val != 0) {
      const selection = institutions.find(institution => institution.id == val)
      setSelectedInstitution(selection)
    } else {
      setSelectedInstitution(null)
    }
  }

  const onSubmitForm = formState => {
    dispatchInstitutionStateAction({
      type: "INSTITUTION_FORM_SUBMIT",
      payload: formState
    });
  };

  return (
    <React.Fragment>
      <AddViewer
        institutionState={institutionState}
        isLoading={isLoading}
        onSubmitForm={onSubmitForm}
        selectedInstitution={selectedInstitution}
        onSelectInstitution={onSelectInstitution}
      />
    </React.Fragment>
  );
};
