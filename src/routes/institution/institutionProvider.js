import React, { useEffect } from "react";

import { useStateValue } from "../../lib/state";

import { InstitutionController } from "./institutionController"

import { getAllInstitutions } from "../../sharedModels/institutionsMdl"
import { getUserInstitutions } from "../../sharedModels/institutionsMdl"

const Institution = () => {
  const [{ institutionState }, dispatchInstitutionStateAction] = useStateValue();

  useEffect(() => {
    const loadInstitutions = async () => {
      const response = await getAllInstitutions();

      dispatchInstitutionStateAction({
        type: "INSTITUTION_LOADED",
        payload: response.data.institutions
      });
    }

    const loadUserInstitutions = async () => {
      const response = await getUserInstitutions()

      dispatchInstitutionStateAction({
        type: "USER_INSTITUTION_LOADED",
        payload: response.data.institutions
      });
    }

    loadInstitutions()
    loadUserInstitutions()
  }, []);

  return (
    <React.Fragment>
      <InstitutionController
        institutionState={institutionState}
        dispatchInstitutionStateAction={dispatchInstitutionStateAction}
      />
    </React.Fragment>
  );
};

export default Institution;
