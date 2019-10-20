import React, { useState, useEffect } from "react";

import { AddViewer } from "./addViewer";

export const AddController = props => {
  const accountState = props.accountState
  const institutions = accountState.accountInstitutions
  const dispatchAccountStateAction = props.dispatchAccountStateAction
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
    dispatchAccountStateAction({
      type: "ACCOUNT_FORM_SUBMIT",
      payload: formState
    });
  };

  return (
    <React.Fragment>
      <AddViewer
        accountState={accountState}
        isLoading={isLoading}
        onSubmitForm={onSubmitForm}
        selectedInstitution={selectedInstitution}
        onSelectInstitution={onSelectInstitution}
      />
    </React.Fragment>
  );
};
