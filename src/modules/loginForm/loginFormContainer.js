import React from "react";

import { useForm } from "../useForm/index";
import BeatLoader from 'react-spinners/BeatLoader';

const LoginForm = props => {
  const loginState = props.loginState;
  const stateSchema = props.stateSchema;
  const validationStateSchema = props.validationStateSchema;
  const onSubmitForm = props.onSubmitForm;

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
          <label htmlFor="uniqueLogin">Username/Email</label>
          <input
            type="text"
            name="uniqueLogin"
            value={state.uniqueLogin.value}
            onChange={handleOnChange}
          />

          {state.uniqueLogin.error && (
            <p style={errorStyle}>{state.uniqueLogin.error}</p>
          )}
        </div>

        <div className="column is-full">
          <label htmlFor="password">Password</label>
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
            {(loginState.isSubmit) ?
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

export default LoginForm;
