import React, { useEffect } from "react";

import { useStateValue } from "../../../../lib/state";
import history from "../../../../lib/history";

import { AddController } from "./addController";

import { getAllInstitutions } from "../../../../sharedModels/institutionsMdl"
import { postUserInstitution } from "../../../../sharedModels/institutionsMdl"

const Add = () => {
  const [{ institutionState }, dispatchInstitutionStateAction] = useStateValue();
  const institutionForm = institutionState.institutionForm

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

    loadInstitutions()

    return (() => {
      dispatchInstitutionStateAction({ type: "INSTITUTION_STATE_RESET" })
    })
  }, [])

  useEffect(() => {
    const submitInstitutionForm = async () => {
      const response = await postUserInstitution(institutionForm.stateSchema)

      // if(response.status.code !== 200) {
      //   dispatchInstitutionStateAction({
      //     type: "INSTITUTION_FORM_FAIL"
      //   })
      // }

      dispatchInstitutionStateAction({
        type: "INSTITUTION_FORM_SUCCESS"
      })
    }

    if (institutionForm.isSubmit) {
      submitInstitutionForm()
    }
  }, [institutionForm])

  return (
    <React.Fragment>
      <AddController
        institutionState={institutionState}
        dispatchInstitutionStateAction={dispatchInstitutionStateAction}
      />
    </React.Fragment>
  );
};

export default Add;
