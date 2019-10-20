import React from "react";

import { useForm } from "../useForm/index";
import BeatLoader from 'react-spinners/BeatLoader';

const AccountForm = props => {
  const accountForm = props.accountForm;
  const stateSchema = props.stateSchema;
  const validationStateSchema = props.validationStateSchema;
  const onSubmitForm = props.onSubmitForm;

  const institution = props.institution

  const {
    state,
    handleOnChange,
    handleOnSubmit,
    handlePasswordShow,
    disable
  } = useForm(stateSchema, validationStateSchema, onSubmitForm);

  const errorStyle = {
    color: "red",
    fontSize: "13px"
  };

  return (
    <React.Fragment>
      <form onSubmit={event => handleOnSubmit(event)}>
        <div className="column is-full">
          <label htmlFor="login">{institution.login_id_caption}</label>
          <input
            type="text"
            name="login"
            value={state.login.value}
            onChange={handleOnChange}
          />

          {state.login.error && (
            <p style={errorStyle}>{state.login.error}</p>
          )}
        </div>

        <div className="column is-full">
          <label htmlFor="password">{institution.password_caption}</label>
          <div className="is-input-group">
            <input
              type="password"
              name="password"
              value={state.password.value}
              onChange={handleOnChange}
            />
            <span onClick={handlePasswordShow}>show</span>
          </div>
          {state.password.error && (
            <p style={errorStyle}>{state.password.error}</p>
          )}
        </div>

        <div className="column is-full">
          <button type="submit" name="submit" className="button is-primary" disabled={disable}>
            {(accountForm.isSubmit) ?
              "SUBMITTING..."
              :
              "SUBMIT"
            }
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AccountForm;
