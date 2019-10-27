import React, { useEffect, useState } from "react";

import { useStateValue } from "../../lib/state";

import { InstitutionController } from "./institutionController"

import { getAllInstitutions, getUserInstitutionsWithAccounts } from "../../sharedModels/institutionsMdl"
import { postNewAccounts } from "../../sharedModels/accountsMdl";

const Institution = () => {
  const [{ institutionState }, dispatchInstitutionStateAction] = useStateValue();
  const [selectedBasiqInstitutionId, setSelectedBasiqInstitutionId] = useState(null)
  const [newAccountsData, setNewAccountsData] = useState(null)

  useEffect(() => {
    const loadInstitutions = async () => {
      const response = await getAllInstitutions();
      if (response.status.code !== 200) {
        return
      }

      dispatchInstitutionStateAction({
        type: "INSTITUTION_LOADED",
        payload: response.data.institutions
      });
    }

    const loadUserInstitutions = async () => {
      const response = await getUserInstitutionsWithAccounts()
      console.log(response)
      if (response.status.code !== 200) {
        return
      }

      dispatchInstitutionStateAction({
        type: "USER_INSTITUTION_LOADED",
        payload: response.data.institutions
      });
    }

    // loadInstitutions()
    loadUserInstitutions()
  }, []);

  useEffect(() => {
    const postAccounts = async () => {
      const accounts = newAccountsData.accounts
      const basiqInstitutionId = newAccountsData.basiqInstitutionId
      const postNewAccountsResponse = await postNewAccounts(basiqInstitutionId, accounts)
      if (postNewAccountsResponse.status.code !== 200) {
        console.log(postNewAccountsResponse.status)
      }
      setNewAccountsData(null)
    }
    if (newAccountsData !== null) {
      postAccounts()
    }
  }, [newAccountsData])

  return (
    <React.Fragment>
      <InstitutionController
        institutionState={institutionState}
        dispatchInstitutionStateAction={dispatchInstitutionStateAction}
        selectedBasiqInstitutionId={selectedBasiqInstitutionId}
        setSelectedBasiqInstitutionId={setSelectedBasiqInstitutionId}
        setNewAccountsData={setNewAccountsData}
      />
    </React.Fragment>
  );
};

export default Institution;
