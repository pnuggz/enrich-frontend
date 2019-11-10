import React, { useState, useEffect } from "react";

import { HomeViewer } from "./homeViewer";

export const HomeController = props => {
  const institutionState = props.institutionState;
  const institutions = institutionState.institutionsData.institutions;
  const dispatchInstitutionStateAction = props.dispatchInstitutionStateAction;
  const [isLoading, setIsloading] = useState(true);

  const [selectedInstitution, setSelectedInstitution] = useState(null);

  useEffect(() => {
    setIsloading(false);
  }, []);

  const onSelectInstitution = val => {
    if (val != 0 || val !== undefined) {
      const selection = institutions.find(institution => institution.id == val);
      setSelectedInstitution(selection);
    } else {
      setSelectedInstitution(null);
    }
  };

  const onSubmitForm = formState => {
    formState.institution.value = selectedInstitution.institution_id;

    dispatchInstitutionStateAction({
      type: "INSTITUTION_FORM_SUBMIT",
      payload: formState
    });
  };

  return (
    <React.Fragment>
      <HomeViewer
        institutionState={institutionState}
        isLoading={isLoading}
        onSubmitForm={onSubmitForm}
        selectedInstitution={selectedInstitution}
        onSelectInstitution={onSelectInstitution}
      />
    </React.Fragment>
  );
};
