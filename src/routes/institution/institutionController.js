import React, { useState, useEffect } from "react";

import { InstitutionViewer } from "./institutionViewer";

export const InstitutionController = props => {
  const selectedBasiqInstitutionId = props.selectedBasiqInstitutionId
  const setSelectedBasiqInstitutionId = props.setSelectedBasiqInstitutionId
  const setNewAccountsData = props.setNewAccountsData
  const institutionState = props.institutionState;
  const [isLoading, setIsloading] = useState(true);
  const [isModalShowing, setIsModalShowing] = useState(false)

  useEffect(() => {
    setIsloading(false);
  }, []);

  const handleInstitutionSelect = basiqInstitutionId => {
    if (basiqInstitutionId !== 0 || basiqInstitutionId !== null) {
      setSelectedBasiqInstitutionId(basiqInstitutionId)
      setIsModalShowing(true)
    }
  }

  const handleModalSubmit = selectedAccounts => {
    setNewAccountsData({
      basiqInstitutionId: selectedBasiqInstitutionId,
      accounts: selectedAccounts
    })
    setIsModalShowing(false);
    setSelectedBasiqInstitutionId(null)
  };

  const handleModalClose = () => {
    setIsModalShowing(false);
  };

  return (
    <React.Fragment>
      <InstitutionViewer
        institutionState={institutionState}
        isLoading={isLoading}
        selectedBasiqInstitutionId={selectedBasiqInstitutionId}
        isModalShowing={isModalShowing}
        handleModalClose={handleModalClose}
        handleModalSubmit={handleModalSubmit}
        handleInstitutionSelect={handleInstitutionSelect}
      />
    </React.Fragment>
  );
};
