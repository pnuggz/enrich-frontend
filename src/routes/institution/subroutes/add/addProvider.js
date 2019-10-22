import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";

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

      dispatchInstitutionStateAction({
        type: "INSTITUTION_LOADED",
        payload: response.data.institutions
      });
    }

    loadInstitutions()
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

  useEffect(() => {
    const socket = socketIOClient.connect("http://localhost:3005/");
    socket.on('news', (data) => {
      console.log(data)
    })

    const socket2 = socketIOClient.connect("http://localhost:3005/test");
    console.log(socket2.nsp)
    socket2.on('test', (data) => {
      console.log(data)
    })
    socket2.on('test2', (data) => {
      console.log(data)
    })
  }, [])

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
